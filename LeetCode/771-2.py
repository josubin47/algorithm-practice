class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        freqs = collections.Counter(stones)
        count = 0
        
        # 빈도 수 합산
        for jewel in jewels:
            count += freqs[jewel]
        
        return count