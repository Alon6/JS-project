function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  function get_promise(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
           let num = getRndInteger(50, 101)
           if (num > 85) reject("Number " + num + " is too big") 
           resolve(num)
        }, 3000)
      })
  }
function main(){
    let prom = get_promise()
    let next_prom = prom.then(
        function(num) {return num}
      )
      .catch(
        function(error) {return error}
      )
    
    next_prom.then(function(num){
        console.log(num)
        })
        .catch(function(num){
            console.log(num)
        })
    
}

main()

