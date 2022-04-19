from collections import Counter

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        counter = Counter(nums)
        for num in counter:
            if counter[num] > 1:
                return True
        return False