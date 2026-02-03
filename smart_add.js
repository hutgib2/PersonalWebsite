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