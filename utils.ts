import winston from "winston"
export const getLogger = (path : string,name : string) => {
    return winston.createLogger({
        level: 'info',
        format: winston.format.simple(),
        transports: [
          //
          // - Write all logs with importance level of `error` or less to `error.log`
          // - Write all logs with importance level of `info` or less to `combined.log`
          //
          new winston.transports.File({ filename: `${path}/logs/${name}_error.log`, level: 'error' }),
          new winston.transports.File({ filename: `${path}/logs/${name}_combined.log` }),
        ],
      });
}
