import { getRndInteger } from "../utils.js"
import { getLogger } from "../utils.js"
const logger = getLogger(process.cwd(),"task1")
const get_promise = async () => {
    const prom = new Promise((resolve) => {
        setTimeout(() => {
            resolve(getRndInteger(1,10))
        }, 3000)
    })
    logger.info(await prom)
}

const main = () => {
    get_promise()
}

main()

