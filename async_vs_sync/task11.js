import winston from "winston"
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });
  
const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
}
const or_promises = async (promise1, promise2) => {
  try{  
    let prom_arr = []
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
    let promise1 = new Promise((resolve,reject) => {
        num = getRndInteger(1,3)
        if (num == 1) resolve()
        reject()
      })
    let promise2 = new Promise((resolve,reject) => {
        num = getRndInteger(1,3)
        if (num == 1) resolve()
        reject()
      })
    or_promises(promise1, promise2)
}
main()

