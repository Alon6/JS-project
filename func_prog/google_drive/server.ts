import winston from "winston"
import { WebSocketServer } from "ws"
import fs from "fs"
import { DriveFile, SEP } from './file.js'
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.File({ filename: 'logs/server_error.log', level: 'error' }),
      new winston.transports.File({ filename: 'logs/server_combined.log' }),
    ],
  })


  const wss = new WebSocketServer({port : 8080})
    // Creating connection using websocket
    wss.on("connection", ws => {
      logger.info("new client connected");
      //on message from client
      ws.on("message", data => {
      logger.info(`Client has sent us: ${data}`)
      const message = data.toString().split(SEP)
      if (message.length == 1){
        if (message[0] == "valid file"){
            ws.close()
        }
        else {
            ws.send("invalid message")
        }
      }
      else if (message.length == 6 || message.length == 5){
        let name = message[1]
        let type = message[3]
        let data = ""
        if (message.length == 6) data = message[5]
        fs.writeFile(name + "." + type, data,(err) => {
            if (err){
                logger.error("Error with writing to file " + name + "." + type + ": " + err.message)
                ws.send("Error: " + err.message)
            }
            else {
                logger.info("Wrote to file " + name + "." + type)
                ws.send("Created file")
            }
        })
      }
    });
  
    // handling what to do when clients disconnects from server
    ws.on("close", () => {
      logger.info("the client has disconnected");
    });
    // handling client connection error
    ws.onerror = function (error) {
      logger.error("Some Error occurred: " + error.message)
    }
  });
  logger.info("The WebSocket server is running on port 8080");