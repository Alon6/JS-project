function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

async function get_promise(){
    let prom = new Promise(function(resolve){
        setTimeout(function(){
            resolve(getRndInteger(1,11))
        }, 3000)
    })
    console.log(await prom)
}

function main(){
    get_promise()
}

main()

