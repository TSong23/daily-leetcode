/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
*/

/* Solution

given 2d array, return 2d array

interval overlap may happen in the front of the array

check if either/both of start and end points of interval[i]
is within the curInt

if so, expand the curInt accordingly
if not, push curInt into returnArr

*/

var merge = function (intervals) {
    let returnArr = [];
    let curInt = intervals[0];

    for (let i = 1; i < intervals.length; i++){
        if (intervals[i][0] <= curInt[1]) {
            curInt = [curInt[0], intervals[i][1]];
        } else if(){

        }else{
            returnArr.push(curInt);
            curInt = intervals[i];
        };
    };
    returnArr.push(curInt);
    return returnArr;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))