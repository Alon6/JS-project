import winston from "winston"
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
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
  
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
function and_promises(promise1, promise2){
    prom_arr = []
    prom_arr.push(promise1)
    prom_arr.push(promise2)
    Promise.all(prom_arr).then(function(){
        logger.info("HUGE success")
    })
    .catch(function(){
        logger.error("Error")
    })
}
  
function main(){
    promise1 = new Promise(function(resolve,reject){
        let num = getRndInteger(1,3)
        if (num == 1) resolve()
        reject()
      })
      promise2 = new Promise(function(resolve,reject){
        let num = getRndInteger(1,3)
        if (num == 1) resolve()
        reject()
      })
    and_promises(promise1, promise2)
}
main()

