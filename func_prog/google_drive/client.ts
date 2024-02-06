import express, { Request, Response, query } from 'express'
import { DriveFile, SEP } from './file.js'
import { body } from "express-validator"
import { validationResult } from "express-validator"
import winston from "winston"
import { WebSocket } from "ws"
import fs from "fs"
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.File({ filename: 'logs/client_error.log', level: 'error' }),
      new winston.transports.File({ filename: 'logs/client_combined.log' }),
    ],
  })
const port = 3000
const app = express()
let server = app.listen(port, () => {
    logger.info(`Server running at http://localhost:${port}`);
  });
  app.use(express.json());
app.get("/closeServer", (req: Request, res: Response) => {
  logger.info("Got close request")  
  res.send("Got It")
  server.close()
})
app.post('/',body("fileName").notEmpty(), body("fileType").notEmpty(), (req: Request, res: Response) => {
  logger.info("Got request")  
  const errors = validationResult(req)
    if (errors.isEmpty()) {
        res.status(200)
        let name : string = req.body.fileName
        let type : string = req.body.fileType
        let data : string = req.body.fileData
        const file = new DriveFile(name, type, data)
        const socket = new WebSocket("ws://localhost:8080")
        socket.onopen = () => {
            logger.info("sending file: " + file.toString().replaceAll(SEP," "))
            socket.send(file.toString())
          }
        socket.onmessage = (event) => {
            const message : string = event.data.toString()
            if (message == "Created file"){
                fs.readFile(file.name + "." + file.type,(err, data) => {
                    if (err){
                        logger.error("Error with opening file " + file.name + "." + file.type + ": " + err.message)
                        socket.send("Error: " + err.message)
                    }
                    else {
                        let content = data.toString()
                        if (content != file.data){
                            logger.info("the content of file " + file.name + "." + file.type + " is not matching the request")
                            socket.send(file.toString())
                        }
                        else {
                            logger.info("the content of file " + file.name + "." + file.type + " is matching the request")
                            socket.send("valid file")
                        }
                    }
                })
              
            }
            else{
                socket.send("invalid message")
            } 
          }
        socket.onclose = () => {
            logger.info("Connection closed")
        }
        socket.onerror = function (error) {
            logger.error("Some Error occurred: " + error.message)
        }
        res.send("Request accepted")
    }
    else {
        logger.info("Invalid postman request")
        res.status(400)
        res.send("Invalid input")
    }
})
  
