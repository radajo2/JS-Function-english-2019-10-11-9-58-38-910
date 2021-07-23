function palindrome(message){
	return message == message.split("").reverse().join("");
}
console.log(palindrome('hello')); 
console.log(palindrome('abcba')); 