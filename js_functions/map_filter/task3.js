function main() {
    array = ["a","b","d","a","c","b"]
    new_array = array.filter(function(value,index,array){
        return array.indexOf(value) == index
    })
    console.log(new_array.map(function(value){
        return value.toUpperCase()
    }))
  }
  

main();
  