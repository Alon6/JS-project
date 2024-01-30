function count(total, value){
    if (value.voted) total++
    return total
}
function main() {
    array = [
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
    console.log(array.reduce(count,0))
  }
  
  if (require.main === module) {
    main();
  }