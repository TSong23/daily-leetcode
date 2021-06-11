class Solution:
    def countAndSay(self, n: int) -> str:
        myStr = str(n)
        myCount = 1
        prevLetter = myStr[0]
        myReturn = ''
        # for loop through string
        for i in range(1, len(myStr)):
            if myStr[i] == prevLetter:
                myCount += 1
            else: 
                myReturn += str(myCount) + prevLetter
                prevLetter = myStr[i]
        return myReturn

