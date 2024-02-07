import { error } from "console";
import fs from "fs"
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
const main = () => {
    fs.readFile("txt.txt", "utf-8", (err, data) => {
        if (err) {
            logger.error(`Error: ${error.message}`)
            throw err
        } 
        const lines = data.split("\n")
        for (let line of lines) {
            let res = ""
            const parts = line.split("|")
            const case_type = parts[0]
            const text = parts[1]
            const words = text.split(" ")
            const handler = {
                "camelCase": () => {
                    res = words[0].toLowerCase()
                    for (let i = 1; i < words.length; i++){
                        res += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
                    }
                },
                "pascalCase": () => {
                    for (let i = 0; i < words.length; i++){
                        res += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
                    }
                }, 
                "kebabCase": () => {
                    res = words[0].toLowerCase()
                    for (let i = 1; i < words.length; i++){
                        res += "-" + words[i].toLowerCase()
                    }
                },      
                "snakeCase": () => {
                    res = words[0].toLowerCase()
                    for (let i = 1; i < words.length; i++){
                        res += "_" + words[i].toLowerCase()
                    }
                },      
                "constantCase": () => {
                    res = words[0].toUpperCase()
                    for (let i = 1; i < words.length; i++){
                        res += "_" + words[i].toUpperCase()
                    }
                },
                "pathCase": () => {
                    res = words[0][0].toUpperCase() + words[0].slice(1).toLowerCase()
                    for (let i = 1; i < words.length; i++){
                        res += "/" + words[i].toLowerCase()
                    }
                }
            }
            handler[case_type]()
            fs.appendFile(case_type + ".txt", res, function (err) {
                if (err){
                    logger.error(`Error: ${error.message}`)
                    throw err
                } 
                logger.info("Saved!")
            });
        }
    })
}
main();
  