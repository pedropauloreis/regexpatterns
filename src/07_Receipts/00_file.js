const fs = require('fs');

const read = fileName => {
    return fs.readFileSync(`${__dirname}/originals/${fileName}`, {encoding: 'utf8'});
}

const write = (fileName, content) => {
    const dirName = `${__dirname}/worked`;
    if (!fs.existsSync(dirName))
        fs.mkdirSync(dirName);

    fs.writeFileSync(`${dirName}/${fileName}`,content, {encoding: 'utf8'});
}

module.exports = {read, write};