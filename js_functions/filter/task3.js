import { getLogger } from "../../utils.js"
const logger = getLogger(process.cwd(),"task3")
const main = () => {
    const input = ["2024-02-29","2028-01-01","2024-01-27","2023-12-15"]
    logger.info(input.filter((value) => {
        const parts = value.split("-")
        const date = new Date(value)
        const curr = new Date()
        return date < curr
    }))
  }
  

main();
