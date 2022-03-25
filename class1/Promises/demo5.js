const fs = require('fs')
const util = require('util');

const read = util.promisify(fs.readFile);

let getFileData = async () => {
    try{
        const data = await read('data.txt')
        console.log(data.toString())
    }catch(error){
        console.log(error.message)
    }
}

getFileData();