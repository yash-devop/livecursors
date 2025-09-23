export function generateRandomColor() {
  const maxVal = 0xffffff; // Represents the maximum possible hexadecimal color value (16,777,215)
  const randomNumber = Math.floor(Math.random() * maxVal);
  let hexColor = randomNumber.toString(16); // Convert to hexadecimal string

  // Pad the hexadecimal string with leading zeros if its length is less than 6
  hexColor = hexColor.padStart(6, "0");

  return `#${hexColor.toUpperCase()}`; // Prepend '#' and convert to uppercase for standard hex format
}
