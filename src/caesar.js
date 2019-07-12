const caesar = (string, key) => {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let newString = '';

  for (let i = 0; i < string.length; i += 1) {
    let char;
    if (lower.indexOf(string[i]) !== -1) {
      char = lower.indexOf(string[i]) + key;
      char = char > 25 ? char - 26 : char;
      newString += lower.charAt(char);
    } else if (upper.indexOf(string[i]) !== -1) {
      char = upper.indexOf(string[i]) + key;
      char = char > 25 ? char - 26 : char;
      newString += upper.charAt(char);
    } else {
      newString += string[i];
    }
  }
  return newString;
};

module.exports = caesar;
