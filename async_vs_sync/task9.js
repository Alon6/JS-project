import { getLogger } from "../utils.js"
const logger = getLogger(process.cwd(),"task9")
const hello = () => {
    logger.info("Hello World")
  }
activate_interval = async () => {
    const interval = setInterval(hello,1000)
    const prom = new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 10000)
    })
    await prom
    clearInterval(interval)
}

const main = () => {
    activate_interval()
}
main()

