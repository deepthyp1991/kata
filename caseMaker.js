const camelCase = function(input) {
  let output = ''
  if(input[0].toLowerCase()){
    output = input[0].toLowerCase()
  }else{
    output =  input[0]
  }
  for (let i = 1; i < input.length; i++){
    if(input[i - 1] === ' '){
      output = output.slice(0, -1)
      output = output + input[i].toUpperCase()
    }
    else{
      output = output + input[i]
    }
  }
  return output
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));