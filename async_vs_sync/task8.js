function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
function get_promise(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let num = getRndInteger(1,3)
            if (num == 1) resolve()
            reject()
        }, 10000)
      })
  }
function promise_array(len){
    let prom_arr = []
    for (let i = 0; i < len; i++){
        prom_arr.push(get_promise())

    }
    Promise.all(prom_arr).then(function(){
        console.log("HUGE success")
    })
    .catch(function(){
        console.log("Error")
    })
}
  
function main(){
    promise_array(4)
}

main()

