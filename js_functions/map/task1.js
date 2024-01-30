function main() {
    array = ["John Doe","Jane Smith","Alon Issman the Great"]
    console.log(array.map(function(value){
        res = ""
        for (word of value.split(" ")) res += word[0]
        return res
    }))
  }
  
  if (require.main === module) {
    main();
  }