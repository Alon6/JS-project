import express, { Request, Response, query } from 'express'
import { body } from "express-validator"
import { validationResult } from "express-validator"
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
      new winston.transports.File({ filename: 'server_error.log', level: 'error' }),
      new winston.transports.File({ filename: 'server_combined.log' }),
    ],
  });
const app = express();
const port = 3000;
const map : Map<string,string> = new Map()

let server = app.listen(port, () => {
    logger.info(`Server running at http://localhost:${port}`);
  });
app.use(express.json());
app.get("/closeServer", (req: Request, res: Response) => {
  logger.info("Got close request")  
  res.send("Got It")
  server.close()
})
app.post('/',body("name").notEmpty(), body("name").isAlphanumeric(), body("pass").notEmpty(), (req: Request, res: Response) => {
  logger.info("Got request")  
  const errors = validationResult(req)
    if (errors.isEmpty()) {
        res.status(200)
        let user : string = req.body.name
        let pass : string = req.body.pass
        if (map.has(user)){
            if (map.get(user) == pass){
                logger.info(`Right password: ${pass} for user ${user}`)
                res.send(`Right password: ${pass} for user ${user}`)
            } 
            else{
              logger.info(`Wrong password: ${pass} for user ${user}`)
              res.send(`Wrong password: ${pass} for user ${user}`)
            }       
        }
        else {
            map.set(user, pass)
            logger.info(`User ${user} created with password ${pass}`)
            res.send(`User ${user} created with password ${pass}`)
        }
    }
    else{
      logger.info("Invalid input")
      res.status(400)
      res.send("Invalid input")
    }    
  });
app.use((req, res) => {
    res.status(404).send("Page not found!")
  })