class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        join_str = int("".join(map(str, digits))) + 1
        str_list = list(str(join_str))
        result = []
        for char in str_list:
            result.append(int(char))
        return result