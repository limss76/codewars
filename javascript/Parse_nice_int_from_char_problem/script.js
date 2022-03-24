function getAge(inputString) {
  // return correct age (int). Happy coding :)
  var a = inputString.split("");
  return parseInt(a[0]);
}

console.log(getAge("4 years old"), 4);
