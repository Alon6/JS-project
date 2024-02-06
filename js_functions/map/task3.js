const main = () => {
    const array = [
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
    console.log(array.map((value) => {
        return {
            label: `${value.name} - ${value.age} years old`
        }
    }))
  }
  
main();
  