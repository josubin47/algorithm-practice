class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = prices[0]
        result = 0
        for i, price in enumerate(prices):
            min_price = min(min_price, price)
            result = max(result, price - min_price)
        return result