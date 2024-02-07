
const main = () => {
    const input = ["my","hello","is","by","buy"]
    console.log(input.filter(function(value){
        return value.match("[aeiouAEIOU]")
    }))
  }
main()