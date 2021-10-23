const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

function throwError(err) {
    throw new Error(chalk.red(err.code, 'there is no file in this path')); 
}

function readFile (file) {
    return new Promise((resolved, rejected) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                rejected(throwError(err));
            }
            const regex = data.match(/\[([^\]]*)\]+\((https?:\/\/[^\[\s\)]*)/gm);
            // console.log(regex);
            regex.map((i) => {
                const strLink = i.replace('[', '').replace('\n', '');
                const splitToArray = strLink.split('](');
                const resultText = { 
                    text: splitToArray[0], 
                    href: splitToArray[1], 
                    file
                };
                return resolved(console.log(resultText));
            })
        });
    });
}

readFile('./text.md', console.log(chalk.blueBright('success in get file')))


// async function getFile (pathFile) {
//     try {
//         const text = await fs.promises.readFile(pathFile, 'utf8');
//         console.log(chalk.green(text));
//     } catch (err) {
//         throwError(err);
//     }
// }


