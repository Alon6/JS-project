function main() {
    array = [
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
    new_array = array.filter(function(value){
        return value.price > 50
    })
    console.log(new_array.map(function(value){
        return {
            name: value.name,
            price: value.price * 0.85
        }
    }))
  }

main();
  