const gridBtn = document.querySelector('#change-canvas');
const clearBtn = document.querySelector('#clear-canvas')
const container = document.querySelector('#container');
const colorRandomizerBtn = document.querySelector('#randomize-color');
const blackBtn = document.querySelector('#black');
const gradualBtn = document.querySelector('#gradual')

let changeGrid

function createGrid(columnNum) {
  container.classList.add('frame')
  for (x = 1; x <= columnNum; x++) {
    const column = document.createElement('div');
    column.classList.add('column');
    container.append(column);
  
    for (y = 1; y <= columnNum; y++) {
      const square = document.createElement('div');
      square.classList.add('square');
      column.append(square);
      /*square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
      })*/
    }
  }  
  begin()
}

let col = 16;
createGrid(col)
let randomColor
function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  randomColor = `rgb(${red}, ${green}, ${blue})`
  return randomColor;
}


function begin() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.style.backgroundColor = 'white';
  })
  let lastUsedFunction 
  
  clearBtn.addEventListener('click', () => {
  /*const columns = document.querySelectorAll('.column');
  columns.forEach(column => {
    column.remove(); 
  }) 
  createGrid(col)*/

  squares.forEach(square => {
    //square.removeEventListener('mouseover', lastUsedFunction)
    square.style.backgroundColor = 'white'
    
  })
}) 

function changeColor() {
  this.style.backgroundColor = getRandomColor()
}

function changeBlack() {
  this.style.backgroundColor = 'black';
}

function colorRainbow() {
  squares.forEach(square => {
    square.removeEventListener('mouseover', lastUsedFunction)
    square.addEventListener('mouseover', changeColor)
  })
  lastUsedFunction = changeColor
}

function colorBlack() {
  squares.forEach(square => {
    square.removeEventListener('mouseover', lastUsedFunction)
    square.addEventListener('mouseover', changeBlack)
  })
  lastUsedFunction = changeBlack
}

function colorGradual() {
  
  squares.forEach(square => {
    let opacity
    square.removeEventListener('mouseover', lastUsedFunction)
    square.addEventListener('mouseover', ()=> {
      console.log(square.style.backgroundColor)
      if (square.style.backgroundColor == `rgba(0, 0, 0, 0.1)` ||
          square.style.backgroundColor == `rgba(0, 0, 0, 0.2)` || 
          square.style.backgroundColor == `rgba(0, 0, 0, 0.3)` || 
          square.style.backgroundColor == `rgba(0, 0, 0, 0.4)` || 
          square.style.backgroundColor == `rgba(0, 0, 0, 0.5)` || 
          square.style.backgroundColor == `rgba(0, 0, 0, 0.6)` || 
          square.style.backgroundColor == `rgba(0, 0, 0, 0.7)` || 
          square.style.backgroundColor == `rgba(0, 0, 0, 0.8)` || 
          square.style.backgroundColor == `rgba(0, 0, 0, 0.898)` || 
          square.style.backgroundColor == `rgb(0, 0, 0)`   
      ) {
        
      }
      else opacity = 0;
      if (square.style.backgroundColor == `rgba(0, 0, 0)` || opacity >= 1) return;
      else square.style.backgroundColor = `rgba(0, 0, 0, ${opacity += 0.1})`;
    })
  })
}

colorRandomizerBtn.addEventListener('click', colorRainbow);

blackBtn.removeEventListener('click', colorBlack);
blackBtn.addEventListener('click', colorBlack);


gradualBtn.addEventListener('click', colorGradual)

/*function resetGrid(number) {
  if (number === null) {
    return;
  }
  else if (number > 100) {
    number = prompt('I\'m afraid that\'s more than 100');
    resetGrid(number);
  }
  columns = document.querySelectorAll('#column')
  columns.forEach(column => {
    column.remove()
  }); 
  createGrid(number)
} */

  changeGrid = () => {
    col = prompt('Enter a number up to 100 to generate a grid with that many columns and rows');
    if (col === null) return;
    else if (col > 100) {
      col = prompt('I\'m afraid that\'s more than 100');
      resetGrid()
    }
    const columns = document.querySelectorAll('.column')
    columns.forEach(column => {
      column.remove()
    }); 
    gradualBtn.removeEventListener('click', colorGradual)
    gridBtn.removeEventListener('click', changeGrid)
    createGrid(col)
  } 
  
  gridBtn.addEventListener('click', changeGrid)
}

