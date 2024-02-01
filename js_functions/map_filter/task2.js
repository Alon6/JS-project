function main() {
    array = [15,24,36,96,0]
    new_array = array.filter(function(value){
        return value > 24
    })
    console.log(new_array.map(function(value){
        return value / 24
    }))
  }
  

main();
  