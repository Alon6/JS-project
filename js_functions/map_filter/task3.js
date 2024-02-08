import { getLogger } from "../../utils.js"
const logger = getLogger(process.cwd(),"task3")
const main = () => {
    const input = ["a","b","d","a","c","b"]
    logger.info(input.filter((value) => input.indexOf(value) == input.lastIndexOf(value)).map((value) => value.toUpperCase()))
  }
  

main();
  