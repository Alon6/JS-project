function sum(total, value){
    return total + value.price
}
function main() {
    array = [
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
    console.log(array.reduce(sum,0))
  }
  

main();
  