import express, { Request, Response, query } from 'express'
import { body } from "express-validator"
import { validationResult } from "express-validator"
import { getLogger } from "../utils.js"
const logger = getLogger(process.cwd(),"server")
const app = express();
const port = 3000;
const map : Map<string,string> = new Map()

const server = app.listen(port, () => {
    logger.info(`Server running at http://localhost:${port}`);
  });
app.use(express.json());
app.get("/closeServer", (req: Request, res: Response) => {
  logger.info("Got close request")  
  res.send("Got It")
  server.close()
})
app.post('/checkPassword',body("name").notEmpty(), body("name").isAlphanumeric(), body("pass").notEmpty(), (req: Request, res: Response) => {
  logger.info("Got request from client, checking validation")  
  const errors = validationResult(req)
    if (errors.isEmpty()) {
        res.status(200)
        const user : string = req.body.name
        const pass : string = req.body.pass
        const handler = {
          [pass] : () => {
            logger.info(`Right password: ${pass} for user ${user}`)
            res.send(`Right password: ${pass} for user ${user}`)
          },
          "default" : () => {
            logger.info(`Wrong password: ${pass} for user ${user}`)
            res.send(`Wrong password: ${pass} for user ${user}`)
          }
        }
        if (map.has(user)){
            (handler[map.get(user)!] || handler["default"])()     
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