const caesar = (string, key) => {
  const map = 'abcdefghijklmnopqrstuvwxyz';
  let newString = '';

  for (let i = 0; i < string.length; i += 1) {
    let char = map.indexOf(string[i]) + key;

    char = char > 25 ? char - 26 : char;

    newString += map.charAt(char);
  }
  return newString;
};

module.exports = caesar;
