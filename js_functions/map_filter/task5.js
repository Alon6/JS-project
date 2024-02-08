import { getLogger } from "../../utils.js"
const logger = getLogger(process.cwd(),"task5")
const main = () => {
    const input = [0, 9, 15, 1, -5, 4]
    logger.info(input.filter((value) => value > 0).map((value) => value ** 2))
  }
  

main();
  