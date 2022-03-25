const fs = require('fs')
const myPromise = new Promise((resolve, reject) => {
    fs.readFile('data.txt', (err, data) => {
        if(err){
            reject('error')
        }else{
            resolve(data)
        }
    })
})

myPromise
    .then(data => console.log(data.toString()))
    .catch(error => console.log(error))