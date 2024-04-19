'use strict'

const gridBtn = document.querySelector('#change-canvas');
const clearBtn = document.querySelector('#clear-canvas')
const container = document.querySelector('#container');
const colorRandomizerBtn = document.querySelector('#randomize-color');
const blackBtn = document.querySelector('#black');
const gradualBtn = document.querySelector('#gradual')
let squares
let recentFunction 
function createGrid(columnNum) {
  container.classList.add('frame')
  for (let x = 1; x <= columnNum; x++) {
    const column = document.createElement('div');
    column.classList.add('column');
    container.append(column);
  
    for (let y = 1; y <= columnNum; y++) {
      const square = document.createElement('div');
      square.classList.add('square');
      column.append(square);
      /*square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
      })*/
    }
  }  
  //begin()
  squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.addEventListener('mouseover', recentFunction)
  })
}


createGrid(16)

function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`
}
 
  
clearBtn.addEventListener('click', () => {
  squares.forEach(square => {
    square.style.backgroundColor = 'white'
  })
}) 

function paintColor() {
  this.style.backgroundColor = getRandomColor()
}

function paintBlack() {
  this.style.backgroundColor = 'black';
}

function colorRainbow() {
  squares.forEach(square => {
    square.removeEventListener('mouseover', recentFunction)
    square.addEventListener('mouseover', paintColor)
  })
  recentFunction = paintColor
}

function colorBlack() {
  
  squares.forEach(square => {
    square.removeEventListener('mouseover', recentFunction)
    square.addEventListener('mouseover', paintBlack)
  })
  recentFunction = paintBlack
}




function colorGradual() {
  squares.forEach(square => {
    let opacity
    square.removeEventListener('mouseover', recentFunction)
    square.addEventListener('mouseover', function paintGradual() {
      if (!this.style.backgroundColor.includes(`rgba(0, 0, 0`) &&
          this.style.backgroundColor !== 'rgb(0, 0, 0)') {
        opacity = 0;
      }
      this.style.backgroundColor = `rgba(0, 0, 0, ${opacity += 0.1})`;
    }) 
    
  })
  //recentFunction = paintGradual
  console.log(recentFunction) 
  recentFunction = colorGradual
}

function changeGrid()  {
  let col = prompt('Enter a number up to 100 to generate a grid with that many columns and rows');
  if (col === null) return;
  else if (col > 100) {
    col = prompt('I\'m afraid that\'s more than 100');
  }
  const columns = document.querySelectorAll('.column')
  columns.forEach(column => {
    column.remove()
  }); 

  createGrid(col)

} 
  
gridBtn.addEventListener('click', changeGrid);
colorRandomizerBtn.addEventListener('click', colorRainbow);
blackBtn.addEventListener('click', colorBlack);
gradualBtn.addEventListener('click', colorGradual);