import { getLogger } from "../../utils.js"
const logger = getLogger(process.cwd(),"task2")
const main = () => {
    const input = [
        {
            name: "name1",
            category: "a"
        },
        {
            name: "name2",
            category: "b"
        },
        {
            name: "name3",
            category: "c"
        },
        {
            name: "name4",
            category: "a"
        },
        {
            name: "name5",
            category: "b"
        },
        {
            name: "name6",
            category: "c"
        }
    ]
    logger.info(input.filter((value) => value.category === "b"))
  }
  
main();
