import { getLogger } from "../../utils.js"
const logger = getLogger(process.cwd(),"task1")
const main = () => {
    const input = ["John Doe","Jane Smith","Alon Issman the Great"]
    logger.info(input.map((value) => {
        let res = ""
        value.split(" ").map((word) => res += word[0]) 
        return res
    }))
  }
  

main();
  