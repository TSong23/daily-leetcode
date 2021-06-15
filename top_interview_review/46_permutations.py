"""
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

"""

# given array of num, return all possible permutations
# need to create a tree and return all the leafs
# select a number to be first. that number get added to return array

# need for loop to select a number from given array to be first
# once each array is returned, combined with first number, then send up again

class Solution:
    def permute(self, nums):
        answer_arr = []
        if len(nums) == 1:
            return [nums]
        for i in range(0, len(nums)):
            holder_arr = self.permute(nums[0:i] + nums[i+1:])
            for arr in holder_arr:
                perm_arr = [nums[i]] + arr
                answer_arr.append(perm_arr)
        return answer_arr


test = Solution()
print(test.permute([1,2,3]))
