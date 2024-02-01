
  function get_promise(arr, index){
    return new Promise(function(resolve){
        resolve(arr[index])
      })
  }
  function print_array(arr){
    arr.sort(function (a,b) {return b - a})
    let prom_arr = []
    for (let i = 0; i < arr.length; i++){
        prom_arr.push(get_promise(arr,i))
        prom_arr[i].then(
            function(num) {return num}
          )
    }
    for (let i = 0; i < arr.length; i++){
        print_num = function(){
            prom_arr[i].then(function(num){
                console.log(num)
            })
        }
        print_num()
    }
  }
function main(){
    print_array([2,6,3,-5,9,12,8,6])
}

main()

