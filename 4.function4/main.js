function countWords(message){
	var words = message.split(" ").length;
	return words;
}
console.log(countWords('Good morning, I love JavaScript.'));