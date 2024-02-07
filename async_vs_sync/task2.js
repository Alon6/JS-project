const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  const get_promise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           let num = getRndInteger(50, 101)
           if (num > 85) reject(`Number ${num} is too big`) 
           resolve(num)
        }, 3000)
      })
  }
const main = () => {
    let prom = get_promise()
    let next_prom = prom.then(
        (num) => {return num}
      )
      .catch(
        (error) => {return error}
      )
    
    next_prom.then((num) => {
        console.log(num)
        })
        .catch((num) => {
            console.log(num)
        })
    
}

main()

