import { getLogger } from "../../utils.js"
const logger = getLogger(process.cwd(),"task2")
const main = () => {
    const input = [15,24,36,96,0]
    logger.info(input.filter((value) => value > 24).map((value) => value / 24))
  }
  

main();
  