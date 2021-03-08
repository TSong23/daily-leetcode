/*
Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.
*/


var countBits = function (num) {
    let output = [0];
    let oneCount = 0;
    let binaryMat = [0];
    let resetMat = [1];

    for(let i = 1; i <=num; i++){

    };

    return output;
};


/*
0
1
10
11
100
110
111
1000
*/

/*
every time power count changes, one Count is reset to 1
power count changes when last digit is changed to 1
keep binary matrix; and keep adding zero to end 
*/

