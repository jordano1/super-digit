// We define super digit of an integer x using the following rules:
// Given an integer, we need to find the super digit of the integer.
// If x has only 1 digit, then its super digit is x.Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.
// For example, the super digit of 9875 will be calculated as:

num = 1246

const super_digit = n =>{
    n = n.toString();
    sum_n = 0
    int_arr_sum = []
    for (let i = 0; i < n.length; i++) {
        int_arr_sum[i] = parseInt(n[i])
        sum_n += int_arr_sum[i]
    }
    if (sum_n.toString().length >= 2){
        super_digit(sum_n)
    }else{
        return console.log(sum_n)
    }
}
super_digit(num)

// super_digit(9875)   9 + 8 + 7 + 5 = 29 
// super_digit(29) 	2 + 9 = 11
// super_digit(11)		1 + 1 = 2
// super_digit(2) = 2  
