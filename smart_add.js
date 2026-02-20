const smart_add = (list_of_nums) => {
    console.log(list_of_nums)
    answer = 0
    // [5, 2]
    for (const num of list_of_nums)
        { // num = 5
        console.log(num)
        answer = answer+num
        } // ans = 7
    return answer
}

const new_answer = smart_add([69,420,1,10,500])
console.log(new_answer)
// [7, 8, 9]
// this is the order that the lines will be called in my smart_add function
// when i pass in [7, 8, 9]: 
// line 2 -> prints the list_of_nums which is "[7, 8, 9]"
// line 3 -> sets answer equal to zero
// line 5 -> the for loop
// line 7 -> outputs 7 to the console log
// line 8 -> adds 7 to answer, answer becomes 7
// line 7 -> outputs 8 to the console log
// line 8 -> adds 8 to answer, answer becomes 15
// line 7 -> outputs 9 to the console log
// line 8 -> adds 9 to answer, answer becomes 1000
// line 10 -> saves the value of answer which is equal to 1000