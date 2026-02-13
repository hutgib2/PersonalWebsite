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

const new_answer = smart_add([1,2,5,3])
console.log(new_answer)
// [5, 4, 1]
// this is the order that the lines will be called in my smart_add function
// when i pass in [5, 4, 1]: 
// line 2 -> prints the list_of_nums which is "[5, 4, 1]"
// line 3 -> sets answer equal to zero
// line 5 -> the for loop
// line 7 -> outputs 5 to the console log
// line 8 -> adds 5 to answer, answer becomes 5
// line 7 -> outputs 4 to the console log
// line 8 -> adds 4 to answer, answer becomes 9
// line 7 -> outputs 1 to the console log
// line 8 -> adds 1 to answer, answer becomes 10
// line 10 -> saves the value of answer which is equal to 10