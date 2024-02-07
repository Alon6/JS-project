const hello = () => {
    console.log("Hello World")
  }
activate_interval = async () => {
    let interval = setInterval(hello,1000)
    let prom = new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 10000)
    })
    await prom
    clearInterval(interval)
}

const main = () => {
    activate_interval()
}
main()

