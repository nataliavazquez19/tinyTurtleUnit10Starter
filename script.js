TinyTurtle.apply(window);

function square(x){
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
}


function triangle(x){
    
    forward(x);
    right(100);
    forward(x);
    right(140);
    forward(x);
     
}


function house(){
   
    forward(40);
    right(60);
    forward(60);
    right(60);
    forward(60);
    right(60);
    forward(40);
    right(90);
    forward(100);
    
}

function pentagon(){
    right(60);
    forward(50);
    right(40);
    forward(50);
    right(60);
    forward(20);
    right(80);
    forward(30);
    right(45);
    forward(70);
    
}

function shape(size, angle)
{
 forward(size);
 right(angle);
 forward(size);
 right(angle);
 forward(size);
 right(angle);
 forward(size);
 right(angle);
 forward(size);
 
 
}
shape(30, 70);
stamp();