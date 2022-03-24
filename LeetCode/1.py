class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i, letter in enumerate(nums):
            complement = target - letter
            if complement in nums[i+1:]:
                return [nums.index(letter), nums[i+1:].index(complement)+(i+1)]