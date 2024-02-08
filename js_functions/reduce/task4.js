import { getLogger } from "../../utils.js"
const logger = getLogger(process.cwd(),"task4")
const calc_votes = (total, {candidate}) => {
    total.set(candidate, 1 + (total.has(candidate) ? total.get(candidate) : 0))
    return total
}
const find_winner = (winner, res) => res[1] > winner[1] ? res : winner
const main = () => {
    const input = [
        {
            name: "Bob",
            age: 30,
            voted: true,
            candidate: "a"
        },
        {
            name: "Jake",
            age: 32,
            voted: true,
            candidate: "b"
        },
        {
            name: "Kate",
            age: 25,
            voted: false,
            candidate: ""
        },
        {
            name: "Sam",
            age: 20,
            voted: false,
            candidate: ""
        },
        {
            name: "Phil",
            age: 21,
            voted: true,
            candidate: "b"
        },
        {
            name: "Ed",
            age: 55,
            voted: true,
            candidate: "a"
        },
        {
            name: "Tami",
            age: 54,
            voted: true,
            candidate: "c"
        },
        {
            name: "Mary",
            age: 31,
            voted: false,
            candidate: ""
        },
        {
            name: "Becky",
            age: 43,
            voted: false,
            candidate: ""
        },
        {
            name: "Joey",
            age: 41,
            voted: true,
            candidate: "a"
        },
        {
            name: "Jeff",
            age: 30,
            voted: true,
            candidate: "a"
        },
        {
            name: "Zack",
            age: 19,
            voted: false,
            candidate: ""
        },
    ]
    const res = input.reduce(calc_votes,new Map())
    res.delete("")
    const [...res_arr] = res.entries()
    logger.info(res_arr.reduce(find_winner,["", 0])[0])
  }
  

main();
  