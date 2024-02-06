const main = () => {
    const array = [0, 9, 15, 1, -5, 4]
    const new_array = array.filter((value) => {
        return value > 0
    })
    console.log(new_array.map((value) => {
        return value ** 2
    }))
  }
  

main();
  