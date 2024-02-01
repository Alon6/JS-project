function hello() {
    console.log("Hello World")
  }
async function activate_interval(){
    let interval = setInterval(hello,1000)
    let prom = new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        }, 10000)
    })
    await prom
    clearInterval(interval)
}

function main(){
    activate_interval()
}
main()

