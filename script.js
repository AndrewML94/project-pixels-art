const button = document.getElementById('button-random-color');
const div = document.querySelectorAll('.color');
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

button.addEventListener('click', changeButtonColor) 

function changeClass(event) {
  for (let index = 0; index < div.length; index += 1) {
    if (div[index].classList.contains('selected')) {
      div[index].classList.remove('selected')
    }
    event.target.classList.add('selected') 
  }
}

div[0].addEventListener('click', changeClass)
div[1].addEventListener('click', changeClass)
div[2].addEventListener('click', changeClass)
div[3].addEventListener('click', changeClass)