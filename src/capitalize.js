function capitalize(string) {
  const first = string[0].toUpperCase();
  const rest = string.substring(1).toLowerCase();
  return `${first}${rest}`;
}

module.exports = capitalize;
