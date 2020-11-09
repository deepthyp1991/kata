const checkAir = function (samples, threshold) {
  let numberofDirtySamples = 0;
  let pollutionLevel;
  for( let i = 0; i < samples.length; i++){
    if(samples[i] === 'dirty'){
      numberofDirtySamples++
    }
    if(numberofDirtySamples === 0){
      pollutionLevel = 0;
    }else{
      pollutionLevel = numberofDirtySamples / samples[i].length
    }
  }
  return threshold > pollutionLevel ? 'clean' : 'Polluted'
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))