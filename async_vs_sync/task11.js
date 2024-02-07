import { getLogger } from "../utils.js"
const logger = getLogger(process.cwd(),"task11")
import { getRndInteger } from "../utils.js"
const or_relation_promises = async (promise1, promise2) => {
  try{  
    const prom_arr = []
    prom_arr.push(promise1)
    prom_arr.push(promise2)
    
    await Promise.any(prom_arr)
    logger.info("HUGE success")
  } catch(error){
    logger.error("Error " + error)
  }
}
  
const main = () => {
  let num = 0
    const promise1 = new Promise((resolve,reject) => {
        num = getRndInteger(1,2)
        if (num == 1) resolve()
        reject()
      })
    const promise2 = new Promise((resolve,reject) => {
        num = getRndInteger(1,2)
        if (num == 1) resolve()
        reject()
      })
    or_relation_promises(promise1, promise2)
}
main()

