
const get_promise = () => {
    return new Promise((reject) => {
        reject("FAILED") 
  })
}
const main = () => {
    let prom = get_promise()
    let next_prom = prom.catch(
        (error) => {return error}
      )
    next_prom.then(
        (error) => {console.log(error)}
    )
}

main()

