function main() {
    array = ["2024-01-29","2028-01-01","2024-01-27","2023-12-15"]
    console.log(array.filter(function(value){
        parts = value.split("-")
        year = parts[0]
        month = parts[1] - 1
        day = parts[2]
        curr = new Date()
        return year < curr.getFullYear() || (year == curr.getFullYear() &&
        (month < curr.getMonth() || (month == curr.getMonth() && day < curr.getDate())))
    }))
  }
  
  if (require.main === module) {
    main();
  }