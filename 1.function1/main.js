function reverseString(message){
  	var splitString = message.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
    return joinArray; 
	}
console.log(reverseString('hello')); 