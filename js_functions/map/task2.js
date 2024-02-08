import { getLogger } from "../../utils.js"
const logger = getLogger(process.cwd(),"task2")
const main = () => {
    const input = [10,20,50,80,100]
    logger.info(input.map((value) => value * 0.9))
  }
  

main();
  