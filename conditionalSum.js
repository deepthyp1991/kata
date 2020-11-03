const conditionalSum = function(values, condition) {
  let total = 0;
 for(const sum of values)
 {
   if( condition === 'even'){
     if(sum % 2 === 0){
       total = total + sum
     }
     else{
       total = total
     }
   }
   else{
     if(sum % 2 === 1){
       total = total + sum
     }
     else{
       total = total
     }
   }
 }
 return total
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));