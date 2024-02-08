import axios, { AxiosResponse } from "axios";
import { getLogger } from "../utils.js"
const logger = getLogger(process.cwd(),"client")
const check_pass = async (name : string, pass : string) => {
    try {
      logger.info(`Sending name: ${name}, password: ${pass}`)
      const response : AxiosResponse<string> = await axios.post<string>(
        "http://localhost:3000/checkPassword",
        { name: name, pass: pass },
      );
      logger.info(response.data)
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        logger.error(`error message: ${error.message}`)
        return error.message;
      } else {
        logger.error(`unexpected error: ${error}`)
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