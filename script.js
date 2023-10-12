const gridBtn = document.querySelector('#change-canvas');
const clearBtn = document.querySelector('#clear-canvas')
const container = document.querySelector('#container');

function createGrid(columnNum) {
  container.classList.add('frame')
  for (x = 1; x <= columnNum; x++) {
    const column = document.createElement('div');
    column.setAttribute('id', 'column');
    container.append(column);
  
    for (y = 1; y <= columnNum; y++) {
      const square = document.createElement('div');
      square.setAttribute('id', 'square');
      column.append(square);
      square.addEventListener('mousemove', () => {
        square.style.backgroundColor = 'black';
      })
    }
  }  
}
createGrid(16)
clearBtn.addEventListener('click', () => {
  const squares = document.querySelectorAll('#square')
  squares.forEach(square => {
    square.style.backgroundColor = 'white'
  }) 
}) 

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

gridBtn.addEventListener('click', () => {
  let userInput = prompt('Enter a number up to 100 to generate a grid with that many columns and rows');
  resetGrid()
  function resetGrid() {
    if (userInput === null) return;
    else if (userInput > 100) {
      userInput = prompt('I\'m afraid that\'s more than 100');
      resetGrid()
    }
    const columns = document.querySelectorAll('#column')
    columns.forEach(column => {
      column.remove()
    }); 
    createGrid(userInput)
  } 
})


