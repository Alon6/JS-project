const main = () => {
    const input = ["a","b","d","a","c","b"]
    const new_array = input.filter((value,index,array) => {
        return array.indexOf(value) == index
    })
    console.log(new_array.map((value) => {
        return value.toUpperCase()
    }))
  }
  

main();
  