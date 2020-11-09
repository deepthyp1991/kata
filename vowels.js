const numberOfVowels = function(data) {
 let vowels = ['a','e','i','o','u']
 let count = 0;
 for(const value of data){
   if(vowels.includes(value))
   count ++
  }
  return count
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
