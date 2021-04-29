class Solution:
    def generate(self, numRows):
        pascal_tri = [[1], [1,1]]
        if numRows == 1:
            return [[1]]
        if numRows == 2:
            return pascal_tri
        idx = 2
        for i in range(idx, numRows):
            nextRow = [1]
            prev_row = pascal_tri[-1]
            for i in range(0, len(prev_row)-1):
                nextRow.append(prev_row[i]+ prev_row[i+1])
            nextRow.append(1)
            pascal_tri.append(nextRow)
        return pascal_tri

