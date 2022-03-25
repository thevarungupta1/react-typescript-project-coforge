function message(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hi promise is been resolved')
        }, 3000)
    })
}

// with out async and await
function msg(){
    console.log('welcome to async and await function')
    message()
        .then(response => console.log(response))
        .catch(error => console.log(error))
    console.log('end')
}

// with async and await
async function msg(){
    console.log('welcome to async and await function')
    const result = await message()        
    console.log('end')
}


msg();   // ----> after 3 second