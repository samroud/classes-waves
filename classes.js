class Cell {
    constructor(pos, size, col, row){
        this.a = 0
        this.size = size/1.5
        this.radius = this.size/2
        this.pos = pos
        this.col = col
        this.row = row
        this.subGrid = new SubGrid(this.size)
    }
    show(){
        noStroke()
        push()
        this.posX = this.pos.x + cos(this.row+this.a)*this.radius
        this.posY = this.pos.y + sin(this.col+this.a)*this.radius
        translate(this.posX,this.posY)
        fill(100)
        ellipse(this.size, this.size, this.size)
        this.subGrid.show()
        pop()
        this.a += TAU/90
      }
}

class SubGrid{
    constructor(size){
        this.size = size/1.5
        this.radius = this.size/2
        this.posX = this.size*2
        this.posY = this.size*2
        this.a = 0
        this.subSubGrid = new SubSubGris(this.size)
    }
    show(){
        this.posX = sin(this.a) * this.radius
        this.posY = cos(this.a) * this.radius
        push()
        translate(this.posX, this.posY)
        fill(150)
        ellipse(this.size*1.5, this.size*1.5, this.size)
        this.subSubGrid.show()
        pop()
        this.a += TAU/270
    }
}

class SubSubGris{
    constructor(size){
        this.size = size/1.5
        this.radius = this.size/2
        this.posX = this.size*2
        this.posY = this.size*2
        this.a = 0
        this.subSubSubGrid = new SubSubSubGris(this.size)
    }
    show(){
        this.posX = cos(this.a) * this.radius
        this.posY = sin(this.a) * this.radius
        push()
        translate(this.posX, this.posY)
        fill(200)
        ellipse(this.size*2, this.size*2, this.size)
        this.subSubSubGrid.show()
        pop()
        this.a += TAU/90
    }
}

class SubSubSubGris{
    constructor(size){
        this.size = size/1.5
        this.radius = this.size/2
        this.posX = 0
        this.posY = 0
        this.a = 0

    }
    show(){
        this.posX = sin(this.a) * this.radius
        this.posY = cos(this.a) * this.radius
        push()
        translate(this.posX, this.posY)
        fill(255,0,0)
        ellipse(this.size*3.5, this.size*3.5, this.size)
        fill(255)
        text(round(this.posX,2), this.size*3.5, this.size*3.5)
        pop()
        this.a += TAU/90
    }
}