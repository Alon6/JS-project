function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

async function create_promises(num){
    let promises = []
    for (let i = 0; i < num; i++){
        promises.push(new Promise(function(resolve){
            setTimeout(function(){
                resolve("Resolved")
            }, getRndInteger(1,5) * 1000)
        }))
    }  
    for (let i = 0; i < num; i++){ 
        console.log(await promises[i])
    }
}

function main(){
    create_promises(6)
}

main()

