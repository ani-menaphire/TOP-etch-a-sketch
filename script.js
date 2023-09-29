const container = document.querySelector('#container');

function createGrid(columnNum) {
  container.classList.add('frame')
  for (x = 1; x <= columnNum; x++) {
    const column = document.createElement('div')
    column.setAttribute('id', 'column')
    container.append(column)
  
    for (y = 1; y <= columnNum; y++) {
      const square = document.createElement('div');
      square.setAttribute('id', 'square')
      column.append(square)
      square.addEventListener('mousemove', () => {
        square.style.backgroundColor = 'black';
      })
    }
  }  
}

createGrid(16)