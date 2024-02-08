import { getLogger } from "../../utils.js"
const logger = getLogger(process.cwd(),"task1")
const main = () => {
    const input = ["my","hello","is","by","buy"]
    logger.info(input.filter((value) => value.match("[aeiouAEIOU]")))
  }
main()