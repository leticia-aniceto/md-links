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

// const getFile = (pathFile) => {
//     return new Promise(function promiseResolve(resolve, reject) {
//         fs.readFile(pathFile, 'utf-8', (error, text) => { 
//             if (error) {
//                 error = 'ERROR: Invalid file.';
//                 return reject(err);
//             } else {
//                 const regex = data.match(/\[([^\[]+)\](\(http.*?\))/gm); 
//                 console.log(chalk.green(text)) 

//             }
//         }) 
//     }) 
    
// }

function throwError(err) {
    throw new Error(chalk.red(err.code, 'there is no file in this path')); 
}

async function getFile (pathFile) {
    try {
        const text = await fs.promises.readFile(pathFile, 'utf8');
        console.log(chalk.green(text));
    } catch (err) {
        throwError(err);
    }
}

// const getFile = (pathFile) => {
//     fs.promises
//     .readFile(pathFile, 'utf8')
//     .then((text) => console.log(text))
//     .catch((err) => throwError(err))
// }

// const getFile = (pathFile) => {
//     fs.readFile(pathFile, 'utf-8', (err, text) => { 
//         if (err) {
//             throwError(err); 
//         }
//         console.log(chalk.blueBright(text));
//     }) 
// }

getFile('./', console.log(chalk.blueBright('success in get file')))


