const sum = (total, value) => {
    return total + value.price
}
const main = () => {
    const input = [
        {
            title: "Tesla",
            price: 90000
        },
        {
            title: "ring",
            price: 45000
        },
        {
            title: "Sack",
            price: 5
        },
        {
            title: "gold",
            price: 2000
        },
        {
            title: "More tesla",
            price: 90000
        },
    ]
    console.log(input.reduce(sum,0))
  }
  

main();
  