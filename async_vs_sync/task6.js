import { getLogger } from "../utils.js"
const logger = getLogger(process.cwd(),"task6")
const get_promise = () => {
    return new Promise((reject) => {
        reject("FAILED") 
  })
}
const pass_promise = () => {
    const prom = get_promise()
    return prom.catch(
        (error) => {return error}
    )
}
const main = () => {
    const next_prom = pass_promise()
    next_prom.then(
        (error) => {logger.error(error)}
    )
}

main()

