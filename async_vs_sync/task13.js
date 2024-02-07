import { getLogger } from "../utils.js"
const logger = getLogger(process.cwd(),"task13")
const activate_intervals = async (arr) => {
    const prom_arr = []
    for (let val of arr){
        const interval = setInterval(() => {
            logger.info(val)
        },1500)
        const prom = new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 30000)
        })
        prom_arr.push([prom,interval])
    }
    for (let prom of prom_arr){
        await prom[0]
        clearInterval(prom[1])
    }
}
const main = () => {
    activate_intervals([1,2,3,4,5])
}
main()

