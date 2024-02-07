
  const get_promise = (arr,index) => {
    return new Promise((resolve) => {
        resolve(arr[index])
      })
  }
  const print_array = (arr) => {
    arr.sort((a,b) => {return b - a})
    let prom_arr = []
    for (let i = 0; i < arr.length; i++){
        prom_arr.push(get_promise(arr,i))
        prom_arr[i].then(
            (num) => {return num}
          )
    }
    for (let i = 0; i < arr.length; i++){
        print_num = () => {
            prom_arr[i].then((num) => {
                console.log(num)
            })
        }
        print_num()
    }
  }
const main = () => {
    print_array([2,6,3,-5,9,12,8,6])
}

main()

