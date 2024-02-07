const get_promise = async (num) => {
    let prom = new Promise((resolve) => {
        setTimeout(() => {
            let sum = 0
            for (let i = 1; i <= num; i++) sum += i
            resolve(sum)
        }, 5000)
    })
    console.log(await prom)
}

const main = () => {
    get_promise(8)
}

main()

