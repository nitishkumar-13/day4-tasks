let chars = ["A", "B", "A", "C", "B"];
let dupChars = chars.filter((c, index) => {
  return chars.indexOf(c) !== index;
});
console.log(dupChars);
