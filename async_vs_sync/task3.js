import { getLogger } from "../utils.js"
const logger = getLogger(process.cwd(),"task3")
const get_promise = async (num) => {
    const prom = new Promise((resolve) => {
        setTimeout(() => {
            const sum = [...Array(num).keys()].reduce((total, value) => total + value + 1)
            resolve(sum)
        }, 5000)
    })
    logger.info(await prom)
}

const main = () => {
    get_promise(8)
}

main()

