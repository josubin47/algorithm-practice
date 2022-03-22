import re, collections

class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        letters = []
        for char in re.sub('[^a-zA-Z0-9]', ' ',  paragraph).lower().split():
            if char not in banned:
                letters.append(char)
        return collections.Counter(letters).most_common(1)[0][0]