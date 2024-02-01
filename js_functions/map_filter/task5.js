function main() {
    array = [0, 9, 15, 1, -5, 4]
    new_array = array.filter(function(value){
        return value > 0
    })
    console.log(new_array.map(function(value){
        return value ** 2
    }))
  }
  

main();
  