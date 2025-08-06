function removeChar(str) {
    var word = "";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (!word.includes(char))
            word += char;
    }
    return word;
}
console.log(removeChar("banana"));
