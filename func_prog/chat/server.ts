import winston from "winston"
import { WebSocketServer, WebSocket } from "ws"
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
const colors = ["\x1b[31m%s\x1b[0m","\x1b[32m%s\x1b[0m","\x1b[33m%s\x1b[0m","\x1b[34m%s\x1b[0m","\x1b[35m%s\x1b[0m"]
const clients : Map<WebSocket, string> = new Map<WebSocket, string>()
let counter = 0
const indexes : Map<WebSocket, number> = new Map<WebSocket, number>()
const names : Map<string, WebSocket> = new Map<string, WebSocket>()
// Creating connection using websocket
wss.on("connection", ws => {
    logger.info("new client connected");
    clients.set(ws,"")
    indexes.set(ws,counter++)
    //on message from client
    ws.on("message", data => {
        logger.info(`Client has sent us: ${data}`)
        const parts : string[] = data.toString().split("$%$")
        if (parts[0] == "Sign out"){
            if (!clients.has(ws)){
                ws.send("Not Connected")
                return
            }
            names.delete(clients.get(ws)!)
            clients.set(ws, "")
            ws.send("Signed out")
        }
        else if (parts.length < 2){
            logger.info("Recieved invalid message: " + data.toString())
            return
        }
        if (parts[0] == "Sign in"){
            let name = parts[1]
            if (names.has(name)){
                ws.send("Caught username")
            }
            else{
                names.set(name, ws)
                clients.set(ws, name)
                ws.send("Joined$%$" + name)
            }
        }
        else if (parts.length == 3 && parts[0] == "Send message"){
            if (!clients.has(ws)){
                ws.send("Not Connected")
                return
            }
            let message : string = parts[1]
            let name : string = parts[2]
            if (name == ""){           
                let sender : string = clients.get(ws)!
                message = "Message from " + sender + " (global): " + message
                clients.forEach((value,key) =>{
                    if (value != sender) key.send("Recieved message$%$" + message + "$%$" + colors[indexes.get(ws)!])
                })
                ws.send("Valid message")
            }
            else {
                let sender : string = clients.get(ws)!
                message = "Message from " + sender + " (private): " + message
                if (name == sender) ws.send("Invalid dest (you)")
                else if (!names.has(name)) ws.send("Invalid dest")
                else {
                    names.get(name)!.send("Recieved message$%$" + message + "$%$" + colors[indexes.get(ws)!])
                    ws.send("Valid message")
                } 
            }
        }
        else{
            logger.info("Recieved invalid message: " + data.toString())
        } 
    })

  // handling what to do when clients disconnects from server
  ws.on("close", () => {
    if (clients.get(ws) != "") names.delete(clients.get(ws)!)
    clients.delete(ws)
    indexes.delete(ws)
    logger.info("the client has disconnected");
  });
  // handling client connection error
  ws.onerror = function (error) {
    logger.error("Some Error occurred: " + error.message)
  }
});
logger.info("The WebSocket server is running on port 8080");