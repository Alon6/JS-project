var fs = require("fs")
function create_files(files_data){
    for (spec of files_data){
        fs.appendFile(spec.fileName + "." + spec.fileType, spec.fileData.toString(), function (err) {
            if (err) throw err
            console.log('Saved!')
          });
    }
}

function main(){
    const fileData = [
        {
            fileName: "number",
            fileType: "txt",
            fileData: 122
        },
        {
            fileName: "func",
            fileType: "js",
            fileData: "console.log('Hello World!')"
        },
        {
            fileName: "design",
            fileType: "css",
            fileData: ""
        }
    ]
    create_files(fileData);
}

if (require.main === module) {
    main();
  }