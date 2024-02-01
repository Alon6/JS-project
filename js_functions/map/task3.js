function main() {
    array = [
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
    console.log(array.map(function(value){
        return {
            label: value.name + " - " + value.age + " years old"
        }
    }))
  }
  
main();
  