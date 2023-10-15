function  isPalindrome(sentence){
    var vadlidString = sentence.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    start = 0;
    end = vadlidString.length-1;
    while(start < end)
    {
        if (vadlidString[start]!=vadlidString[end])
            return false;
        start++;
        end--;
    }
    return true;
}
function  printNumber(sentence){
    var vadlidString = sentence.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    var ans="";
    for (i=0; i<vadlidString.length; i++)
    {
        if (isNumeric(vadlidString[i]))
            ans+=vadlidString[i];
    }
    if (ans.length==0)
        return ("NaN")
    return ans;
}
function isNumeric(char){
    if (char >= '0' && char <='9')
        return true;
    return false;
}
function isStringLengthValid(sentence, n){
    if (sentence.length<= n)
        return true;
    return false;
}
function padStringToLength(sourceString, n, newChar){
    if (sourceString.length>n)
        return sourceString;
    var ans = " ";
    append=0;
    for(i=0; i<=(n-sourceString.length-1); i++)
    {
        if(newChar.length-1<append){
            append = 0;
        }
        ans=ans+newChar[append];
        append++;
    }
    return ans+sourceString;
}