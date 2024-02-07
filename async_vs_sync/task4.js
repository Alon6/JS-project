import { getLogger } from "../utils.js"
const logger = getLogger(process.cwd(),"task4")
  const get_promise = (value) => {
    return new Promise((resolve) => {
        resolve(value)
      })
  }
  const promise_print_array = (arr) => {
    arr.sort((a,b) => {return b - a})
    arr.map((value) => {
      const prom = get_promise(value)
      prom.then(
        (num) => {logger.info(num)}
      )
    })
  }
const main = () => {
    promise_print_array([2,6,3,-5,9,12,8,6])
}

main()

