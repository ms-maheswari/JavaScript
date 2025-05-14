function isPalindrome(str){
    let rev = "";
    for(let i = str.length - 1; i >= 0; i--){
        rev += str[i];
    }
    return str === rev;
}

let str = "madam";  // Palindrome

if(isPalindrome(str)){
    console.log("Palindrome");
} else {
    console.log("Not a palindrome");
}
