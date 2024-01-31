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
function main(){
    fs.readFile("txt.txt", "utf-8", function(err, data) {
        if (err) throw err
        lines = data.split("\n")
        for (line of lines) {
            let res = ""
            parts = line.split("|")
            let case_type = parts[0]
            let text = parts[1]
            words = text.split(" ")
            switch(case_type){
                case "camelCase":
                    res = words[0].toLowerCase()
                    for (let i = 1; i < words.length; i++){
                        res += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
                    }
                    break
                case "pascalCase":
                    for (let i = 0; i < words.length; i++){
                        res += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
                    }
                    break
                case "kebabCase":
                    res = words[0].toLowerCase()
                    for (let i = 1; i < words.length; i++){
                        res += "-" + words[i].toLowerCase()
                    }
                    break
                case "snakeCase":
                    res = words[0].toLowerCase()
                    for (let i = 1; i < words.length; i++){
                        res += "_" + words[i].toLowerCase()
                    }
                    break
                case "constantCase":
                    res = words[0].toUpperCase()
                    for (let i = 1; i < words.length; i++){
                        res += "_" + words[i].toUpperCase()
                    }
                    break
                case "pathCase":
                    res = words[0][0].toUpperCase() + words[0].slice(1).toLowerCase()
                    for (let i = 1; i < words.length; i++){
                        res += "/" + words[i].toLowerCase()
                    }
                    break
                
            }
            fs.appendFile(case_type + ".txt", res, function (err) {
                if (err) throw err
                winston.log("Saved!")
            });
        }
    })
}
main();
  