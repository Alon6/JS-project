
function main() {
    array = ["my","hello","is","by","buy"]
    console.log(array.filter(function(value){
        return value.includes("a") || value.includes("e") || value.includes("i") || 
        value.includes("o") || value.includes("u") 
    }))
  }
  
  if (require.main === module) {
    main();
  }