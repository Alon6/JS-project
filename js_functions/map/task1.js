const main = () => {
    const input = ["John Doe","Jane Smith","Alon Issman the Great"]
    console.log(input.map((value) => {
        let res = ""
        value.split(" ").map((word) => res += word[0]) 
        return res
    }))
  }
  

main();
  