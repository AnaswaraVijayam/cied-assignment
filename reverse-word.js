// Q2
function reverseWords() {
  // Here retrieves the input sentence from html
  var inputSentence = document.getElementById("inputSentence").value;
  // call the reverseWord function with the input sentence and space as seperator
  var reversedWords = reverseWord(inputSentence, " ");
  // Here the reverse result into the outputResult
  document.getElementById("outputResult").innerText = reversedWords;
}

function reverseWord(string, separator) {
  // split the input string into an array of word using seperator.
  // Then map each word in the array and reverse the characters and then join them back.
  // joins the reverse word back into a single string using seperator.
  return string
    .split(separator)
    .map(function (word) {
      return word.split("").reverse().join("");
    })
    .join(separator);
}
