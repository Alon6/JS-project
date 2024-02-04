import axios, { AxiosResponse } from "axios";
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
      new winston.transports.File({ filename: 'client_error.log', level: 'error' }),
      new winston.transports.File({ filename: 'client_combined.log' }),
    ],
  });
async function check_pass(name : string, pass : string) {
    try {
      logger.info("Sending name: " + name + " , password: " + pass)
      const response : AxiosResponse<string> = await axios.post<string>(
        "http://localhost:3000/",
        { name: name, pass: pass },
      );
      logger.info(response.data)
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        logger.error('error message: ' + error.message)
        return error.message;
      } else {
        logger.error('unexpected error: ' + error)
        return 'An unexpected error occurred'
      }
    }
  }
  
  check_pass("Alon", "1234")
  check_pass("Arthur", "123")
  check_pass("Alon", "1234")
  check_pass("Alon", "123")
  check_pass("Arthur", "123")
  check_pass("", "123");
  check_pass("Arthur%$#", "123");
  check_pass("Arthur", "");
  axios.get(
    "http://localhost:3000/closeServer",
  );