function main() {
    array = [
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
    new_array = array.filter(function(value){
        return value.age >= 25 && value.age <= 35
    })
    console.log(new_array.map(function(value){
        return value.name
    }))
  }
  

main();
  