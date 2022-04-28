
    const path = require('path'); 
    const fs = require('fs')
    const filename = process.argv[1]; 

   module.exports = 
    fs.readdir(filename, function(error,list) {
        if (error) {
           console.log(error)
        }
        list.forEach(function(file) {
            if (path.extname(file) == '.' + process.argv[3]) {
                console.log(file)
            }
        })
        filename(error,list)
    }) 
    
