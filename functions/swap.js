var swap = 0
// i am going to write a function that when called swaps the value 
// of the variable swap between 0 and 1

const swap_func = () => {
    if (swap === 0) {
        swap = 1
    }
    else {
        swap = 0
    }
}

// the value will be 0
// console.log("the value of var is: " + swap)
// the value will be 1
// console.log("the value of var is: " + swap)
// // // // // // // // // // // // // // // // // // // // // // // // // // // //
var lightbulb = 'off'

const switching_lightbulb = () => {
    if (lightbulb === 'off') { 
        lightbulb = 'on'
    }
    else {
        lightbulb = 'off'
    }
}

console.log("the lightbulb is turned " + lightbulb)
switching_lightbulb()
console.log("the lightbulb is turned " + lightbulb)