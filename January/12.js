/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
*/

/* Solution

given 2d array, return 2d array

if intervals[i][0] <= intervals[i-1][1] => overlap, so merge
if not => just push intervals[i-1] in to return arr and update current interval to intervals[i]

interval overlap may happen in the front of the array
*/

var merge = function (intervals) {
    let returnArr = [];
    let curInt = intervals[0];

    for (let i = 1; i < intervals.length; i++){
        if (intervals[i][0] <= curInt[1]) {
            curInt = [curInt[0], intervals[i][1]];
        } else{
            returnArr.push(curInt);
            curInt = intervals[i];
        };
    };
    returnArr.push(curInt);
    return returnArr;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))