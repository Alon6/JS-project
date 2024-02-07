const calc_votes = (total, {voted,candidate}) => {
    if (voted){
        if (total.has(candidate)){
            total.set(candidate,total.get(candidate) + 1)
        }
        else {
            total.set(candidate,1)
        }
    }
    return total
}
const find_winner = (winner, [candidate,votes]) => {
    const parts = winner.split("|")
    if (votes > parts[1])
        winner = `${candidate}|${votes}`
    return winner
}
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
    const [...res_arr] = res.entries()
    console.log(res_arr.reduce(find_winner,"|0").split("|")[0])
  }
  

main();
  