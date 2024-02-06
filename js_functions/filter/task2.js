const main = () => {
    const array = [
        {
            name: "name1",
            category: "a"
        },
        {
            name: "name2",
            category: "b"
        },
        {
            name: "name3",
            category: "c"
        },
        {
            name: "name4",
            category: "a"
        },
        {
            name: "name5",
            category: "b"
        },
        {
            name: "name6",
            category: "c"
        }
    ]
    console.log(array.filter((value) => {
        return value.category === "b"
    }))
  }
  
main();
