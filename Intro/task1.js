import fs from "fs"
import winston from "winston"
import fileData from "task1input.json" assert { type: 'json' };
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
function create_files(files_data){
    for (var spec of files_data){
        fs.writeFile(spec.fileName + "." + spec.fileType, spec.fileData.toString(), function (err) {
            if (err) throw err
            logger.info('Saved!')
          });
    }
}

function main(){
    create_files(fileData);
}

main();
  