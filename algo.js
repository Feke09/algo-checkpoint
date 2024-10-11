function analyzeSentence(sentence) {
  // Initialize counters
  let lengthCounter = sentence.length; // Total number of characters
  let wordsCounter = sentence.split(" ").length; // Number of words
  let vowelsCounter = 0; // Number of vowels

  // Count vowels
  for (let char of sentence) {
    if ("aeiouAEIOU".includes(char)) {
      vowelsCounter++;
    }
  }

  return {
    length: lengthCounter,
    words: wordsCounter,
    vowels: vowelsCounter,
  };
}

// Example usage
let sentence = "Hello world.";
let result = analyzeSentence(sentence);

console.log("Length:", result.length);
console.log("Words:", result.words);
console.log("Vowels:", result.vowels);
