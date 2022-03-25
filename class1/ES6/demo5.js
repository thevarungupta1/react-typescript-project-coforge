const odd = [1,3,5,7,9]
const even = [2,4,6,8]

//const combined = [...odd, ...even]
const combined = [...odd, 100, 200, ...even, 500]
console.log(combined)
