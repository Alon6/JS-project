const main = () => {
    const array = [15,24,36,96,0]
    const new_array = array.filter((value) => {
        return value > 24
    })
    console.log(new_array.map((value) => {
        return value / 24
    }))
  }
  

main();
  