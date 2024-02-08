import { getLogger } from "../../utils.js"
const logger = getLogger(process.cwd(),"task5")
const summarize = (total, {age, voted}) => {
    if (age >= 18 && age <= 55){
        const forties = () => {
            total.forties_voters++
            total.forties_voters_count += voted ? 1 : 0
        }
        const age_range = {            
            '2' : () => {
                total.twenties_voters++
                total.twenties_voters_count += voted ? 1 : 0
            },
            '3' : () => {
                total.thirties_voters++
                total.thirties_voters_count += voted ? 1 : 0
            },
            '4' : forties,
            '5' : forties
        }
        const range = Math.round(age / 10 - 0.1).toString()
        age_range[range]()
    }
    return total
}
const main = () => {
    const input = [
        {
            name: "Bob",
            age: 30,
            voted: true
        },
        {
            name: "Jake",
            age: 32,
            voted: true
        },
        {
            name: "Kate",
            age: 25,
            voted: false
        },
        {
            name: "Sam",
            age: 20,
            voted: false
        },
        {
            name: "Phil",
            age: 21,
            voted: true
        },
        {
            name: "Ed",
            age: 55,
            voted: true
        },
        {
            name: "Tami",
            age: 54,
            voted: true
        },
        {
            name: "Mary",
            age: 31,
            voted: false
        },
        {
            name: "Becky",
            age: 43,
            voted: false
        },
        {
            name: "Joey",
            age: 41,
            voted: true
        },
        {
            name: "Jeff",
            age: 30,
            voted: true
        },
        {
            name: "Zack",
            age: 19,
            voted: false
        },
    ]
    const res = (input.reduce(summarize,
        {
            twenties_voters: 0,
            twenties_voters_count: 0,
            thirties_voters: 0,
            thirties_voters_count: 0,
            forties_voters: 0,
            forties_voters_count: 0
        }
        ))
    logger.info(`twenties: ${res.twenties_voters}, voters: ${res.twenties_voters_count}`)
    logger.info(`thirties: ${res.thirties_voters}, voters: ${res.thirties_voters_count}`)
    logger.info(`forties: ${res.forties_voters}, voters: ${res.forties_voters_count}`)
  }
  

main();
  