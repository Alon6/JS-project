const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
const get_promise = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let num = getRndInteger(1,3)
            if (num == 1) resolve()
            reject()
        }, 10000)
      })
  }
const promise_array = (len) => {
    let prom_arr = []
    for (let i = 0; i < len; i++){
        prom_arr.push(get_promise())

    }
    Promise.all(prom_arr).then(() => {
        console.log("HUGE success")
    })
    .catch(() => {
        console.log("Error")
    })
}
  
const main = () => {
    promise_array(4)
}

main()

