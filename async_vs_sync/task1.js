const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

get_promise = async () => {
    let prom = new Promise((resolve) => {
        setTimeout(() => {
            resolve(getRndInteger(1,11))
        }, 3000)
    })
    console.log(await prom)
}

const main = () => {
    get_promise()
}

main()

