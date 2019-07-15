class Background {
    constructor(ctx,w,h){
        this.ctx = ctx
        this.width = w
        this.height = h

        this.posX = 0
        this.posY = 0

        this.image = new Image()
        this.image.src = "images/bg.png"

        this.velX = 1.2
    }

    //métodos
    draw (){
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
        this.ctx.drawImage(this.image, this.posX+this.width, this.posY, this.width, this.height)
    }

    move() {
        
        this.posX -= this.velX
        //Cuando la primera imagen salga por completo de la pantalla restablecemos la posicion de ambas, generando un bucle.
        if(this.posX <= -this.width){ this.posX= 0}
    }
}