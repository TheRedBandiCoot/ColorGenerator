// *** Select Elements
const container = document.querySelector('.container');
const button = document.querySelector('#button');

//@ *** CSS Styling Parts
document.body.style.display = container.style.display = button.style.display = 'flex';
document.body.style.justifyContent = container.style.justifyContent = button.style.justifyContent = 'center';
document.body.style.alignItems = container.style.alignItems = button.style.alignItems = 'center';

// *** Add Click Event to this button
button.addEventListener('click', colorGenerator);
window.addEventListener('keydown', (e) => {
  if (e.key === ' ') {
    colorGenerator();
  }
});

//@ Call Function Globally for Generating random colors on Page load
colorGenerator();

// *** Creating the Generating Colors Logic With Function
function colorGenerator() {
  const p = button.querySelector('p');

  let colorArr = [
    Math.floor(Math.random() * 255 + 0),
    Math.floor(Math.random() * 255 + 0),
    Math.floor(Math.random() * 255 + 0),
  ];

  let [red, green, blue] = colorArr;
  let rgbValue = `${red},${green},${blue}`;
  container.style.backgroundColor = `rgb(${rgbValue})`;

  button.style.boxShadow = `0 0 10px 5px rgba(0, 0, 0, 0.2), inset 0 0 5px 7px rgba(${rgbValue},0.6)`;

  p.style.color = `rgb(${rgbValue})`;
  container.previousElementSibling.children[0].children[0].style.color = `rgb(${rgbValue})`;

  function colorToHex(color) {
    let hexDecimal = color.toString(16);
    return hexDecimal.length == 1 ? '0' + hexDecimal : hexDecimal;
  }

  function rgbColor(red, green, blue) {
    return `#${colorToHex(red)}${colorToHex(green)}${colorToHex(blue)}`;
  }

  p.innerText = rgbColor(red, green, blue);
  navigator.clipboard
    .writeText(p.innerText)
    .then(() => alert(p.innerText + ' copied'))
    .catch((err) => console.log(err));
}
