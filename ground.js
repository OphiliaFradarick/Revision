//A CLASS IS A BLUE PRINT OF OBJECTS IN WHICH THE PROPERTIES AND FUNCTIONS ARE SPECIFIED
//PROPERTIES ARE MENTIONED INSIDE THE CONSTRUCTOR

class Ground{
 //PROPERTIES 
 constructor(x, y, width, height){

    var options = {
        isStatic:true
    }
    this.body = Bodies.rectangle(x, y, width, height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);

 }

 //FUNCTIONS
 showRect(){
 
    rectMode(CENTER);
    fill("brown");
    rect(this.body.position.x,this.body.position.y, this.width, this.height);

 }
}