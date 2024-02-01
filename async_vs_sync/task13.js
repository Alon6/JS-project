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
function print_val(val) {
    logger.info(val)
}
async function activate_intervals(arr){
    let prom_arr = []
    for (let val of arr){
        let interval = setInterval(function(){
            print_val(val)
        },1500)
        let prom = new Promise(function(resolve){
            setTimeout(function(){
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
function main(){
    activate_intervals([1,2,3,4,5])
}
main()

