class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = collections.defaultdict(list) # 사전 초기화
        for char in strs:
            key = ''.join(sorted(char))
            anagrams[key].append(char)
        return anagrams.values()