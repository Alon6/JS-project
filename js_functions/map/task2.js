function main() {
    array = [10,20,50,80,100]
    console.log(array.map(function(value){
        return value * 0.9
    }))
  }
  
  if (require.main === module) {
    main();
  }