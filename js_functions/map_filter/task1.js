import { getLogger } from "../../utils.js"
const logger = getLogger(process.cwd(),"task1")
const main = () => {
    const input = [
        {
            name: "Product1",
            price: 50
        },
        {
            name: "Product2",
            price: 60
        },
        {
            name: "Product3",
            price: 80
        },
        {
            name: "Product4",
            price: 100
        },
        {
            name: "Product5",
            price: 10
        },
    ]
    logger.info(input.filter(({price}) => price > 50).map(({price}) => price * 0.85 ))
  }

main();
  