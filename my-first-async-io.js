const fs = require('fs'); 
const filename = process.argv[2]; 


    fs.readFile(filename, function (error, fileContents) {
        if(error) {
            return console.log(error)
        } 
        const contents = fileContents.toString();
        console.log(contents.split('\n').length - 1)
        
    })

