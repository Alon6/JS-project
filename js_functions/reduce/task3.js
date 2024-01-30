function flat(total, value){
    for (item of value)
    total.push(item)
    return total
}
function main() {
    array = [["1","2","3"],[true],[4,5,6]]
    console.log(array.reduce(flat,[]))
  }
  
  if (require.main === module) {
    main();
  }