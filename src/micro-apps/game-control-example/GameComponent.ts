// cSpell:disable
export default class GameComponent{    
    type:string;
    score:number;
    width:number;
    height:number;
    speedX:number;
    speedY:number;
    x:number;
    y:number;
    gravity:number;
    moveSpeed:number;
    canvas:any;
    canvasContext:any;
    color:any;
    text:string='';
    

    constructor(canvas,canvasContext,width, height, color, x, y, type){          
            this.type = type;
            this.score = 0;
            this.width = width;
            this.height = height;
            this.speedX = 0;
            this.speedY = 0;
            this.x = x;
            this.y = y;
            this.gravity = 0;
            this.moveSpeed = 30;
            this.canvas=canvas;
            this.canvasContext=canvasContext;
            this.color=color;
     }
     update() {
            var ctx = this.canvasContext;
            if (this.type === "text") {
                   ctx.font = this.width + " " + this.height;
                   ctx.fillStyle = this.color;
                   ctx.fillText(this.text, this.x, this.y);
             } else {
                   ctx.fillStyle = this.color;
                   ctx.fillRect(this.x, this.y, this.width, this.height);
             }
      }
      newPos() {
       this.moveSpeed += this.gravity;
       this.x += this.speedX;
       this.y += this.speedY + this.moveSpeed;
       this.hitBottom();
      }
      moveUp(){
          this.y-=this.moveSpeed;
          if(this.y<0){
              this.y=0;
          }
      }
      moveDown(){
        this.y+=this.moveSpeed;
        var rockbottom = this.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
        }
      }
      moveRight(){
            this.x+=this.moveSpeed;
            var rockbottom = this.canvas.width - this.width;
            if (this.x > rockbottom) {
                this.x = rockbottom;
            }
      }
      moveLeft(){
            this.x-=this.moveSpeed;
            if (this.x <0) {
                this.x = 0;
            }
      }
      hitBottom(){
        var rockbottom = this.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.moveSpeed = 1;
        }
      }
      crashWith(otherobj){
             var myleft = this.x;
             var myright = this.x + (this.width);
             var mytop = this.y;
             var mybottom = this.y + (this.height);
             var otherleft = otherobj.x;
             var otherright = otherobj.x + (otherobj.width);
             var othertop = otherobj.y;
             var otherbottom = otherobj.y + (otherobj.height);
             var crash = true;
             if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
                 crash = false;
             }
             return crash;
      }


   }