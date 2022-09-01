const button = document.getElementById('button-random-color');
const div = document.querySelectorAll('.color');
const divColor1 = div[0].style.backgroundColor = '#000000';
const divColor2 = div[1].style.backgroundColor = '#FF0000';
const divColor3 = div[2].style.backgroundColor = '#008000';
const divColor4 = div[3].style.backgroundColor = '#0000FF';

function changeButtonColor() {
  const hexadecimal = '0123456789ABCDEF';
  let color = '#';
  let color2 = '#';
  let color3 = '#';
  for (let index = 0; index < 6; index += 1) {
    color += hexadecimal[(Math.floor(Math.random() * 16))];
    color2 += hexadecimal[(Math.floor(Math.random() * 16))];
    color3 += hexadecimal[(Math.floor(Math.random() * 16))];
  }
  for (let index = 0; index < div.length; index += 1) {
    div[1].style.backgroundColor = color;
    div[2].style.backgroundColor = color2;
    div[3].style.backgroundColor = color3;
  }
}

button.addEventListener('click', changeButtonColor) 