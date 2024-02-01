function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

async function get_promise(num){
    let prom = new Promise(function(resolve){
        setTimeout(function(){
            let sum = 0
            for (let i = 1; i <= num; i++) sum += i
            resolve(sum)
        }, 5000)
    })
    console.log(await prom)
}

function main(){
    get_promise(8)
}

main()

