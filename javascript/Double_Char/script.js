function doubleChar(str) {
  // Your code here
  var char = str.split("");
  var double = char.map((n) => n.repeat(2));
  var merge = double.reduce((acc, value) => acc + value);
  return merge;
}

console.log(doubleChar("abcd"), "aabbccdd");
console.log(doubleChar("Adidas"), "AAddiiddaass");
console.log(doubleChar("1337"), "11333377");
console.log(doubleChar("illuminati"), "iilllluummiinnaattii");
console.log(doubleChar("123456"), "112233445566");
console.log(doubleChar("%^&*("), "%%^^&&**((");
