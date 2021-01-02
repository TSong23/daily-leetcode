/* You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct.Your goal is to form arr by concatenating the arrays in pieces in any order.However, you are not allowed to reorder the integers in each array pieces[i].
Return true if it is possible to form the array arr from pieces.Otherwise, return false.
*/

// go through the pieces and find matching numbers in arr
// if there is any leftover piece, return false

var canFormArray = function (arr, pieces) {

    for (let i = 0; i < pieces.length; i++){
        let curPiece = pieces[i];
        
    };
};