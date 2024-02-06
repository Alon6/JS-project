const main = () => {
    const array = ["a","b","d","a","c","b"]
    const new_array = array.filter((value,index,array) => {
        return array.indexOf(value) == index
    })
    console.log(new_array.map((value) => {
        return value.toUpperCase()
    }))
  }
  

main();
  