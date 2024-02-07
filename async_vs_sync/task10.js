import { getRndInteger } from "../utils.js"
import { getLogger } from "../utils.js"
const logger = getLogger(process.cwd(),"task10")
const and_relation_promises = (promise1, promise2) => {
    const prom_arr = []
    prom_arr.push(promise1)
    prom_arr.push(promise2)
    Promise.all(prom_arr).then(() => {
        logger.info("HUGE success")
    })
    .catch(() => {
        logger.error("Error")
    })
}
  
const main = () => {
    promise1 = new Promise((resolve,reject) => {
        const num = getRndInteger(1,2)
        if (num == 1) resolve()
        reject()
      })
      promise2 = new Promise((resolve,reject) => {
        const num = getRndInteger(1,2)
        if (num == 1) resolve()
        reject()
      })
    and_relation_promises(promise1, promise2)
}
main()

