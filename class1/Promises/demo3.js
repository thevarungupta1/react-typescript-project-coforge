function first(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve('first')
        }, 3000)
    })
}

function second(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve('second')
        }, 1000)
    })
}

function third(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve('third')
        }, 2000)
    })
}


// function caller(){
//     first()
//         .then(response => console.log(response))
//         .catch(error => console.log(error))

//     second()
//         .then(response => console.log(response))
//         .catch(error => console.log(error))

//     third()
//         .then(response => console.log(response))
//         .catch(error => console.log(error))
// }

async function caller(){
    const a = await first()
    const b = await second()
    const c = await third()

    console.log(a)
    console.log(b)
    console.log(c)
}


caller();