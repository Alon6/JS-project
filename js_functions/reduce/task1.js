const count = (total, value) => {
    if (value.voted) total++
    return total
}
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
    console.log(input.reduce(count,0))
  }
  

main();
  