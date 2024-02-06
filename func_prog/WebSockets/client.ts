import winston from "winston"
import { WebSocket } from "ws"
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
function getRndInteger(min : number, max : number) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
const MIN = 1
const MAX = 100
const num = getRndInteger(MIN,MAX)
const socket = new WebSocket("ws://localhost:8080")
socket.onopen = () => {
  logger.info("Guess my number between " + MIN + " and " + MAX)
  logger.info("The number is " + num)
  socket.send(MIN + " " + MAX)
}
socket.onmessage = (event) => {
  const message : string = event.data.toString()
  let guess : number = 0
  if (message == "Calculating next guess..."){
    logger.info("Waiting for next guess")
  }
  else{
    guess = parseInt(message)
    if (!isNaN(guess)){
      if (guess == num){
       logger.info("The server guessed correctly - " + guess)
        socket.send("right")
      }
      else if(guess > MAX || guess < MIN) {
        logger.info("The server sent an invalid guess")
        socket.send("Guess needs to be a number between " + MIN + " and " + MAX)
      }
      else{
        logger.info("The server guessed incorrectly - " + guess)
        socket.send("wrong")
      }
    }
    else {
      logger.info("The server sent an invalid guess")
      socket.send("Guess needs to be a number")
    }
  } 
}
socket.onclose = () => {
  logger.info("Connection closed")
}
socket.onerror = function (error) {
  logger.error("Some Error occurred: " + error.message)
}