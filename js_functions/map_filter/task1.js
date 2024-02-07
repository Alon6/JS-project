const main = () => {
    const input = [
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
    const new_array = input.filter(({price}) => {
        return price > 50
    })
    console.log(new_array.map(({name, price}) => {
        return {
            name: name,
            price: price * 0.85
        }
    }))
  }

main();
  