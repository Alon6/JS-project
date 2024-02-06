const main = () => {
    const array = ["2024-02-29","2028-01-01","2024-01-27","2023-12-15"]
    console.log(array.filter((value) => {
        const parts = value.split("-")
        const date = new Date(parts[0], parts[1] - 1, parts[2])
        const curr = new Date()
        return date < curr
    }))
  }
  

main();
