var fs = require("fs")
function main(){
    fs.readFile("txt.txt", "utf-8", function(err, data) {
        if (err) throw err
        lines = data.split("\n")
        for (line of lines) {
            var res = ""
            parts = line.split("|")
            var case_type = parts[0]
            var text = parts[1]
            words = text.split(" ")
            switch(case_type){
                case "camelCase":
                    res = words[0].toLowerCase()
                    for (var i = 1; i < words.length; i++){
                        res += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
                    }
                    break
                case "pascalCase":
                    for (var i = 0; i < words.length; i++){
                        res += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
                    }
                    break
                case "kebabCase":
                    res = words[0].toLowerCase()
                    for (var i = 1; i < words.length; i++){
                        res += "-" + words[i].toLowerCase()
                    }
                    break
                case "snakeCase":
                    res = words[0].toLowerCase()
                    for (var i = 1; i < words.length; i++){
                        res += "_" + words[i].toLowerCase()
                    }
                    break
                case "constantCase":
                    res = words[0].toUpperCase()
                    for (var i = 1; i < words.length; i++){
                        res += "_" + words[i].toUpperCase()
                    }
                    break
                case "pathCase":
                    res = words[0][0].toUpperCase() + words[0].slice(1).toLowerCase()
                    for (var i = 1; i < words.length; i++){
                        res += "/" + words[i].toLowerCase()
                    }
                    break
                
            }
            fs.appendFile(case_type + ".txt", res, function (err) {
                if (err) throw err
                console.log("Saved!")
            });
        }
    })
}


if (require.main === module) {
    main();
  }