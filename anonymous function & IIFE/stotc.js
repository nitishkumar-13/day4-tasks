let output = function (stringArr) {
  for (let i = 0; i < stringArr.length; i++) {
    let word = stringArr[i];
    let titleCaseWord = "";
    titleCaseWord += word[0].toUpperCase();
    for (let j = 1; j < word.length; j++) {
      titleCaseWord += word[j];
    }

    stringArr[i] = titleCaseWord;
  }
  console.log(stringArr);
};
let stringArr = ["nitish", "kumar", "suresh"];
output(stringArr);
