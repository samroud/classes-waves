let grid = []
let myFont
function preload(){
  myFont = loadFont('Capital-SemiBold.otf')
}


function setup() {
  createCanvas(500, 500)
  frameRate(30)

  textFont(myFont)
  textSize(15)
  textAlign(CENTER)

  //GRID
  let gridSize = 10
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