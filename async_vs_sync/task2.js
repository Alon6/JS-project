import { getRndInteger } from "../utils.js"
import { getLogger } from "../utils.js"
const logger = getLogger(process.cwd(),"task2")
  const get_promise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           let num = getRndInteger(50, 100)
           if (num > 85) reject(`Number ${num} is too big`) 
           resolve(num)
        }, 3000)
      })
  }
const main = () => {
    let prom = get_promise()
      prom.then(
        (num) => {logger.info(num)}
      )
      .catch(
        (error) => {logger.error(error)}
      )   
}

main()

