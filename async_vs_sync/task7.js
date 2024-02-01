function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

async function get_promise(){
    let prom = new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        }, 5000)
    })
    await prom
    console.log("next promise")
    prom = new Promise(function(resolve){
        setTimeout(function(){
            resolve(getRndInteger(1,101))
        }, 10000)
    })
    console.log(await prom)
}

function main(){
    get_promise()
}

main()

