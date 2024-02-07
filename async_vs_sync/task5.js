const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

create_promises = async (num) => {
    let promises = []
    for (let i = 0; i < num; i++){
        promises.push(new Promise((resolve) => {
            setTimeout(() => {
                resolve("Resolved")
            }, getRndInteger(1,5) * 1000)
        }))
    }  
    for (let i = 0; i < num; i++){ 
        console.log(await promises[i])
    }
}

const main = () => {
    create_promises(6)
}

main()

