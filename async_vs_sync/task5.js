import { getRndInteger } from "../utils.js"
import { getLogger } from "../utils.js"
const logger = getLogger(process.cwd(),"task5")
const create_promises = async (num) => {
    const promises = []
    for (let i = 0; i < num; i++){
        promises.push(new Promise((resolve) => {
            setTimeout(() => {
                resolve("Resolved")
            }, getRndInteger(1,4) * 1000)
        }))
    }
    promises.map(async (value) => logger.info(await value))  
    return promises
}

const main = () => {
    create_promises(6)
}

main()

