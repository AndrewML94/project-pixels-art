const button = document.getElementById('button-random-color');
const div = document.querySelectorAll('.color');
div[0].style.backgroundColor = '#000000';
div[1].style.backgroundColor = '#FF0000';
div[2].style.backgroundColor = '#008000';
div[3].style.backgroundColor = '#0000FF';

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
    var backgroundColors = [div[0].style.backgroundColor, div[1].style.backgroundColor, div[2].style.backgroundColor, div[3].style.backgroundColor];
  }
  localStorage.setItem('colorPalette', JSON.stringify(backgroundColors));
  div[1] = JSON.parse(localStorage.getItem('colorPalete'));
}

button.addEventListener('click', changeButtonColor) 

