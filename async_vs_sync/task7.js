import { getRndInteger } from "../utils.js"
import { getLogger } from "../utils.js"
const logger = getLogger(process.cwd(),"task7")
const get_first_promise = async () => {
    const prom = new Promise((resolve) => {
        setTimeout(() => {
            resolve(get_second_promise())
        }, 5000)
    })
    return await prom
}
const get_second_promise = async () => {
    logger.info("next promise")
    const prom = new Promise((resolve) => {
        setTimeout(() => {
            resolve(getRndInteger(1,100))
        }, 10000)
    })
    logger.info(await prom)
}

const main = () => {
    get_first_promise()
}

main()

