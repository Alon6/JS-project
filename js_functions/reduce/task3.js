const flat = (total, value) => {
    return total.concat(value)
}
const main = () => {
    const array = [["1","2","3"],[true],[4,5,6]]
    console.log(array.reduce(flat,[]))
  }
  

main();
  