import winston from "winston"
import { WebSocket } from "ws"
import Repl from "node:repl"
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
console.log("Welcome to the chat, in order to join enter your username")
const prompt = `> `
const repl = Repl.start({prompt})
let username = ""
const socket = new WebSocket("ws://localhost:8080")
        socket.onopen = () => {
            logger.info("Opened connection with server")
        }
        socket.onmessage = (event) => {
            const parts : string[] = event.data.toString().split("$%$")
            if (parts[0] == "Joined" && parts.length == 2){
                username = parts[1]
                console.log("You are now connected as " + username)
            }
            else if (parts[0] == "Caught username"){
                console.log("The username you chose is already caught, please enter another username")
            }
            else if (parts[0] == "Invalid dest"){
                console.log("The username you chose to send the message to does not exist")
            }
            else if (parts[0] == "Invalid dest (you)"){
                console.log("You can't send messages to yourself")
            }
            else if (parts[0] == "Valid message"){
                console.log("Your message was successfully transmitted")
            }
            else if (parts[0] == "Signed out"){
                username = ""
                console.log("You have signed out successfully")
            }
            else if (parts.length == 3 && parts[0] == "Recieved message"){
                console.log(parts[2], parts[1])
            }
            else{
                logger.info("Recieved invalid message: " + event.data.toString())
            } 
          }
        socket.onclose = () => {
            logger.info("Connection closed")
        }
        socket.onerror = function (error) {
            logger.error("Some Error occurred: " + error.message)
        }
// Define our custom commands
repl.defineCommand("sign_in",{
    help: "Signing in a new user, gets the username as an argument",
    action(name : string) {
        if (!name){
            console.log("enter your username")
            return
        }
        if (username != ""){
            console.log("You have already signed in")
            return
        }
        socket.send("Sign in$%$" + name)
        console.log("Your username has been sent")
    }
})
repl.defineCommand("sign_out",{
    help: "Signing out of the chat, in order to enter again you will need to sign in again",
    action() {
        if (!username){
            console.log("You are not signed in")
            return
        }
        socket.send("Sign out")
        console.log("Your request has been sent")
    }
})
repl.defineCommand("send",{
    help: "Send a message to either a specific user or to everyone if no user was specified.\n" +
    "When entering the message use '_' instead of ' ',\n" +
    "and seperate the user with '---'",
    action(input : string) {
        if (!input){
            console.log("Enter a message")
            return
        }
        if (!username){
            console.log("You are not signed in")
            return
        }
        const parts = input.split("---")
        let name = ""
        if (parts.length == 2){
            name = parts[1]
        }
        socket.send("Send message$%$" + parts[0].replaceAll("_"," ") + "$%$" + name)
        console.log("You have sent the message")
    }
})
