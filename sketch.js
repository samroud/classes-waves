let grid = []


function setup() {
  createCanvas(500, 500)
  frameRate(30)

  //GRID
  let gridSize = 15
  let cellSize = width/gridSize
 
  for (let col = 0; col < gridSize; col += 1){
    for (let row = 0; row < gridSize; row += 1){
      let posX = col * cellSize
      let posY = row * cellSize
      let posCell = {x: posX, y: posY}
      let newCell = new Cell(posCell, cellSize, col, row)
      grid.push(newCell)
    }
  }
}


function draw() {

  background(0)

   //grid
   for (let i = 0; i < grid.length; i += 1){
    let currentCell = grid[i]
    currentCell.show()
  }
}