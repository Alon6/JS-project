import { getLogger } from "../utils.js"
const logger = getLogger(process.cwd(),"task12")

const get_promise = (val) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(val)
        }, val * 1000)
      })
  }
const promise_min = (arr) => {
    const prom_arr = arr.map((value) => get_promise(value))
    Promise.race(prom_arr).then((val) => {
        logger.info(val)
    })
}
  
const main = () => {
    promise_min([3,7,10,2,10,4,5])
}

main()

