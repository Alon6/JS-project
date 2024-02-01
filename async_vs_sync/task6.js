
  function get_promise(){
    return new Promise(function(reject){
        reject("FAILED") 
  })
}
function main(){
    let prom = get_promise()
    let next_prom = prom.catch(
        function(error) {return error}
      )
    next_prom.then(
        function(error) {console.log(error)}
    )
}

main()

