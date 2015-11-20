function pigLatin(phrase) {
	return pigWord(phrase);
}

function pigWord(word) {
	word = word.toLowerCase();
	var regEx = /[aeiou]*[^aeiou]+u*/;
	var consonant;
	consonant = regEx.exec(word)[0];
	var pigWord = word.slice(consonant.length);
	pigWord = pigWord + consonant + "ay";
	return pigWord;
}