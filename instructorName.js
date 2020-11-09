const instructorWithLongestName = function(instructors) {
  let longestName = 0;
  let longestIndex = 0;
  for(const data of instructors){
    if((data.name).length > longestName){
      longestName = (data.name).length;
      longestIndex = data
    }
}
  return longestIndex
}
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}, 
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));