function isPalindrome(s1, s2){
    if(s1.length !== s2.length)
        return false;

    for(var i=0;i<s1.length-1;i++){
        if(s1.charAt(i)===s2.charAt(i)){
            return true;
        }
    }
    return false;
}

let string1 = "hellom";

let string2 = "hello";

if(isPalindrome(string1,string2)){
    console.log("Palindrome");
}
else{
    console.log("Not a palindrome");
}


// Output : Not a palindrome