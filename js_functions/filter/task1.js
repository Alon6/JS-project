
const main = () => {
    const array = ["my","hello","is","by","buy"]
    console.log(array.filter(function(value){
        return value.match("[aeiou]")
    }))
  }
main()