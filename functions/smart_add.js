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
// [69, 420, 1, 10, 500]
// this is the order that the lines will be called in my smart_add function:
// when i pass in [69, 420, 1, 10, 500]: 
// line 2 -> prints the list_of_nums which is "[69, 420, 1, 10, 500]"
// line 3 -> sets answer equal to zero
// line 5 -> the for loop
// line 7 -> outputs 69 to the console log
// line 8 -> adds 69 to answer, answer becomes 69
// line 7 -> outputs 420 to the console log
// line 8 -> adds 420 to answer, answer becomes 489
// line 7 -> outputs 1 to the console log
// line 8 -> adds 1 to answer, answer becomes 490
// line 7 -> outputs 10 to the console log
// line 8 -> adds 10 to answer, answer becomes 500
// line 7 -> outputs 500 to the console log
// line 8 -> adds 500 to answer, answer becomes 1000
// line 10 -> saves the value of answer which is equal to 1000
// line 13 -> calls the function with the value of the argument assigned
// line 14 -> prints the answer