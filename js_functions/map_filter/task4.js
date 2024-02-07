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
    const new_array = input.filter(({age}) => {
        return age >= 25 && age <= 35
    })
    console.log(new_array.map(({name}) => {
        return name
    }))
  }
  

main();
  