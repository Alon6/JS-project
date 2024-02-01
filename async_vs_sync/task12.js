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

function get_promise(val){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(val)
        }, val * 1000)
      })
  }
function promise_min(arr){
    let prom_arr = []
    for (let val of arr){
        prom_arr.push(get_promise(val))

    }
    Promise.race(prom_arr).then(function(val){
        logger.info(val)
    })
}
  
function main(){
    promise_min([3,7,10,2,10,4,5])
}

main()

