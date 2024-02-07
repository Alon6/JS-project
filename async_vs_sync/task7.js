const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  const get_promise = async () => {
    let prom = new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 5000)
    })
    await prom
    console.log("next promise")
    prom = new Promise((resolve) => {
        setTimeout(() => {
            resolve(getRndInteger(1,101))
        }, 10000)
    })
    console.log(await prom)
}

const main = () => {
    get_promise()
}

main()

