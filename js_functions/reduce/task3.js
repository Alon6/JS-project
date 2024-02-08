import { getLogger } from "../../utils.js"
const logger = getLogger(process.cwd(),"task3")
const flat = (total, value) => total.concat(value)

const main = () => {
    const input = [["1","2","3"],[true],[4,5,6]]
    logger.info(input.reduce(flat,[]))
  }
  

main();
  