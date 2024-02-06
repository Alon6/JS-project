import winston from "winston"
import { WebSocketServer } from "ws"
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
  function getRndInteger(min : number, max : number) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
const wss = new WebSocketServer({port : 8080})
let min : number, max : number
  // Creating connection using websocket
  wss.on("connection", ws => {
    logger.info("new client connected");
    //on message from client
    ws.on("message", data => {
    logger.info(`Client has sent us: ${data}`)
    const message = data.toString().split(" ")
    if (message.length == 2){
      min = parseInt(message[0])
      max = parseInt(message[1])
      if (isNaN(min) || isNaN(max)) ws.send("Invalid message format")
      else if (min > max) ws.send("Invalid message format: min should be smaller than max")
      else {
        ws.send(getRndInteger(min,max))
      }
    }
    else if (message.length == 1){
      if (message[0] == "right"){
        ws.close()
      }
      else if (message[0] == "wrong"){
        ws.send("Calculating next guess...")
        setTimeout(() => {
          ws.send(getRndInteger(min,max))
      }, 2000)
      }
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