const button = document.getElementById('button-random-color');
const div = document.querySelectorAll('.color');
const divPixel = document.getElementsByClassName('pixel');
const buttonClear = document.getElementById('clear-board');
const input = document.getElementById('board-size');
const buttonAddBoard = document.querySelector('#generate-board');
let divFather = document.querySelector('#pixel-board');
let result;

div[0].style.backgroundColor = '#000000';
div[1].style.backgroundColor = '#FF0000';
div[2].style.backgroundColor = '#008000';
div[3].style.backgroundColor = '#0000FF';

function changeButtonColor() {
  const hexadecimal = '0123456789ABCDEF';
  const color = {
    color1: '#',
    color2: '#',
    color3: '#',
  };
  for (let index = 0; index < 6; index += 1) {
    color.color1 += hexadecimal[(Math.floor(Math.random() * 16))];
    color.color2 += hexadecimal[(Math.floor(Math.random() * 16))];
    color.color3 += hexadecimal[(Math.floor(Math.random() * 16))];
    localStorage.setItem('colorPalette', JSON.stringify(color));
  }
  for (let index = 1; index < div.length; index += 1) {
    if (index === 1) {
      div[index].style.backgroundColor = color.color1;
    } else if (index === 2) {
      div[index].style.backgroundColor = color.color2;
    } else {
      div[index].style.backgroundColor = color.color3;
    }
  }
}
button.addEventListener('click', changeButtonColor);

function reloadColor() {
  const savedBackgroundColor = JSON.parse(localStorage.getItem('colorPalette'));
  if (savedBackgroundColor !== null) {
    div[1].style.backgroundColor = savedBackgroundColor.color1;
    div[2].style.backgroundColor = savedBackgroundColor.color2;
    div[3].style.backgroundColor = savedBackgroundColor.color3;
  }
}

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

function colorDivPixel() {
  for (let index = 0; index < divPixel.length; index += 1) {
    divPixel[index].addEventListener('click', function(color) {
      for (let index = 0; index < div.length; index += 1) {
        if (div[index].classList.contains('selected')) {
          color.target.style.backgroundColor = div[index].style.backgroundColor;
          savedColors()
        }
      }
    })  
  }
}
  
function clearDivPixel() {
  for (let index = 0; index < divPixel.length; index += 1) {
    if (divPixel[index].style.backgroundColor !== 'white') {
      divPixel[index].style.backgroundColor = 'white';
    }
  }
}
buttonClear.addEventListener('click', clearDivPixel)

function savedColors() {
  let savedDrawing = [];
  for (let index = 0; index < divPixel.length; index += 1) {
    savedDrawing[index] = divPixel[index].style.backgroundColor;
    localStorage.setItem('pixelBoard', JSON.stringify(savedDrawing));
  }
}

function reloadDrawing() {
  let restoreDrawing = JSON.parse(localStorage.getItem('pixelBoard'));
  for (let index = 0; index < divPixel.length; index += 1) {
    if (restoreDrawing !== null) {
      for (let index = 0; index < restoreDrawing.length; index += 1) {
        divPixel[index].style.backgroundColor = restoreDrawing[index];
      }
    } 
  }
}

function changeInput() {
  if (input.value > 0 && input.value < 5) {
    result = 5 * 5;
    return result
  } else if (input.value > 50) {
    result = 50 * 50;
    return result
  } else if (input.value >= 5 || input.value <= 50) {
    result = input.value * input.value;
    return result
  }
}
input.addEventListener('change', changeInput) 

function setGridTemplate() {
  let restorePixel = JSON.parse(localStorage.getItem('boardSize'));
  if (restorePixel) {
    divFather.style.gridTemplateColumns = restorePixel;
  }
}

function firstDivs() {
  if (divFather.length === undefined) {
    for (let index = 0; index < 25; index += 1) {
      const initialDiv = document.createElement('div');
      initialDiv.classList.add('pixel');
      divFather.appendChild(initialDiv);
      divFather.style.gridTemplateColumns = 'repeat(5, auto)';
      colorDivPixel()
    }
  }
}

function createPixel() {
  for (let index = 0; index < result - 25; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.classList.add('pixel');
    divFather.appendChild(createDiv);
    divFather.style.gridTemplateColumns = 'repeat(' + input.value + ', auto)';
    localStorage.setItem('boardSize', JSON.stringify(divFather.style.gridTemplateColumns));
    colorDivPixel()
  }
}

function alertEmpty() {
  createPixel();
  if (input.value === '') {
    alert('Board inválido!');
  }
}
buttonAddBoard.addEventListener('click', alertEmpty)

reloadColor()
firstDivs()
reloadDrawing()
setGridTemplate()
createPixel()
