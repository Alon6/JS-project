import { getRndInteger } from "../utils.js"
import { getLogger } from "../utils.js"
const logger = getLogger(process.cwd(),"task8")
const get_promise = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const num = getRndInteger(1,2)
            if (num == 1) resolve()
            reject()
        }, 10000)
      })
  }
const promise_array = (len) => {
    const prom_arr = []
    for (let i = 0; i < len; i++){
        prom_arr.push(get_promise())

    }
    Promise.all(prom_arr).then(() => {
        logger.info("HUGE success")
    })
    .catch(() => {
        logger.error("Error")
    })
}
  
const main = () => {
    promise_array(4)
}

main()

