const main = () => {
    const input = [0, 9, 15, 1, -5, 4]
    const new_array = input.filter((value) => {
        return value > 0
    })
    console.log(new_array.map((value) => {
        return value ** 2
    }))
  }
  

main();
  