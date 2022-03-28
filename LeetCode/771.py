class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        j_list = jewels[::1]
        count = 0
        for stone in stones:
            if stone in j_list:
                count += 1
        return count