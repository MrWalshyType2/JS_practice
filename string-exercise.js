function longestWord(message) {
    let messageArray = message.split(" ");
    let result = "";
    let resultsOfSameLength = [];
    
    messageArray.forEach(element => {
        if (element.length > result.length) {
            result = element;
        } else if (element.length == result.length) {
            resultsOfSameLength.push(element);
        }
    });
    resultsOfSameLength.push(result);
    return resultsOfSameLength;
}

let result = longestWord("I am going to Londonab and will be back tomorrow");
console.log(result);