import { getLogger } from "../../utils.js"
const logger = getLogger(process.cwd(),"task1")
const count = (total, value) => total + Number(value)
const main = () => {
    const input = [
        {
            name: "Person1",
            age: 30,
            voted: true
        },
        {
            name: "Person2",
            age: 25,
            voted: true
        },
        {
            name: "Person3",
            age: 40,
            voted: false
        },
        {
            name: "Person4",
            age: 24,
            voted: true
        },
        {
            name: "Person5",
            age: 33,
            voted: true
        },
    ]
    logger.info(input.reduce(count,0))
  }
  

main();
  