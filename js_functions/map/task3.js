import { getLogger } from "../../utils.js"
const logger = getLogger(process.cwd(),"task3")
const main = () => {
    const input = [
        {
            name: "name1",
            age: 10
        },
        {
            name: "name2",
            age: 20
        },
        {
            name: "name3",
            age: 30
        },
        {
            name: "name4",
            age: 40
        }
    ]
    logger.info(input.map((value) => {
        return {
            label: `${value.name} - ${value.age} years old`
        }
    }))
  }
  
main();
  