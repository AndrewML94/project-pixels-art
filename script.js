const button = document.getElementById('button-random-color');
const div = document.querySelectorAll('.color');
div[0].style.backgroundColor = '#000000';
div[1].style.backgroundColor = '#FF0000';
div[2].style.backgroundColor = '#008000';
div[3].style.backgroundColor = '#0000FF';
const hexadecimal = '0123456789ABCDEF';

function changeButtonColor() {
  let color1 = '#';
  let color2 = '#';
  let color3 = '#';
  for (let index = 0; index < 6; index += 1) {
    color1 += hexadecimal[(Math.floor(Math.random() * 16))];
    color2 += hexadecimal[(Math.floor(Math.random() * 16))];
    color3 += hexadecimal[(Math.floor(Math.random() * 16))];
  }
  for (let index = 1; index < div.length; index += 1) {
    if (index === 1) {
      div[index].style.backgroundColor = color1;
    } else if (index === 2) {
      div[index].style.backgroundColor = color2;
    } else {
      div[index].style.backgroundColor = color3;
    }
    let backgroundColor = [color1, color2, color3];
    localStorage.setItem('colorPalette', JSON.stringify(backgroundColor));
  }
}

button.addEventListener('click', changeButtonColor);

function changeClass(event) {
  for (let index = 0; index < div.length; index += 1) {
    if (div[index].classList.contains('selected')) {
      div[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
}

div[0].addEventListener('click', changeClass);
div[1].addEventListener('click', changeClass);
div[2].addEventListener('click', changeClass);
div[3].addEventListener('click', changeClass);

const divPixel = document.querySelectorAll('.pixel');
for (let index = 0; index < divPixel.length; index += 1) {
  divPixel[index].addEventListener('click', function(color) {
    for (let index = 0; index < div.length; index++) {
      if (div[index].classList.contains('selected')) {
        color.target.style.backgroundColor = div[index].style.backgroundColor;
      }
    }
  })
}

const buttonClear = document.getElementById('clear-board');
buttonClear.addEventListener('click', function() {
  for (let index = 0; index < divPixel.length; index += 1) {
    if (divPixel[index].style.backgroundColor !== 'white') {
      divPixel[index].style.backgroundColor = 'white';
    }
  }
})
