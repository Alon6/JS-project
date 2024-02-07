const flat = (total, value) => {
    return total.concat(value)
}
const main = () => {
    const input = [["1","2","3"],[true],[4,5,6]]
    console.log(input.reduce(flat,[]))
  }
  

main();
  