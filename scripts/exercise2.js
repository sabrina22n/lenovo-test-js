function palindrome(word)
{
for (let i = 0, j = word.length - 1; i < j; i++, j--) {
    if (word[i] !== word[j]) 
        return false;
}
return true;
}

console.log(palindrome("level"));//true
console.log(palindrome("test"));//false