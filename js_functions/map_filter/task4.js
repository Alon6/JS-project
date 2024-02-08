import { getLogger } from "../../utils.js"
const logger = getLogger(process.cwd(),"task4")
const main = () => {
    const input = [
        {
            name: "Person1",
            age: 30
        },
        {
            name: "Person2",
            age: 25
        },
        {
            name: "Person3",
            age: 40
        },
        {
            name: "Person4",
            age: 24
        },
        {
            name: "Person5",
            age: 33
        },
    ]
    logger.info(input.filter(({age}) => age >= 25 && age <= 35).map(({name}) => name))
  }
  

main();
  