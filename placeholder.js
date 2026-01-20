console.log("Neptune is Overpowered")
var tutor = "Ronan"
console.log(tutor)
var tutor = "Eden"
console.log(tutor)
var num_1 = 68
var num_2 = 21
var num_3 = num_1*num_2
console.log(num_3)
const hugo_add = (add_1,add_2) => {
    // console.log("i am here")
    // console.log(`i have been told to add ${add_1}, and ${add_2}`)
    return add_1+add_2
}

const new_hugo_add = (add_1,add_2) => {
    add_1 = 4
    add_2 = 5
    add_3 = add_1+add_2
}

const answer = hugo_add(3,4)
const new_answer = new_hugo_add(add_1, add_2, add_3)
// conditional statements
if (true) {
    console.log(hugo_add(1,1))
}

if (false) {
    console.log(hugo_add(100, 11))
}

// this function adds 2 numbers together

const burp = () => {
    const burp = "burp"
    return burp
}

console.log(burp())