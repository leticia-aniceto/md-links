const chalk = require('chalk');
const fs = require('fs');
// const path = require('path');

// module.exports = function (dir, filter, callback) { 

//     fs.readdir(dir, function (err, list) {
//         if(err) {
//             return callback(err);
//         }
//         list = list.filter(function (file) {
//             return path.extname(file) === '.' + filter; 
//         })
//         callback(null, list)
//     })
// }

const getFile = (pathFile) => { 
    const encoding = 'utf-8' 
    fs.readFile(pathFile, encoding, (error, text) => { 
        if (error) {
            console.log(err.message);
        }
        const regex = data.match(/\[([^\]]*)\]\((http[s]?[^)]*)/gm); 
        console.log(chalk.green(text)) 
    }) 
}

console.log('oi');
