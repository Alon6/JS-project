const main = () => {
    const array = ["John Doe","Jane Smith","Alon Issman the Great"]
    console.log(array.map((value) => {
        let res = ""
        value.split(" ").map((word) => res += word[0]) 
        return res
    }))
  }
  

main();
  