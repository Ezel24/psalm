canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define the width & height of the rover image.
rover_width=100;
rover_height=90;
nasa_mars_images_array=["xxxmarksthespotxxx.jpg","psalm.jpg","nasa.kkk.jpg","ezekiel.jpg"];
random_number= Math.floor(Math.random()*4);
background_image= nasa_mars_images_array[random_number];
console.log("background_image="+background_image);
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

//Create "add()" function
 function add() {
     background_imgTag = new Image();//defining a variable with a new image
	 background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	 background_imgTag.src = background_image;// load image

     rover_imgTag = new Image();//defining a variable with a new image
	 rover_imgTag.onload = uploadrover;// setting a function, onloading this variable
	 rover_imgTag.src = rover_image;// load image
 }
//Create "uploadBackground()"() function.
    function uploadBackground () {                      
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);                                     //Draw image of background
    }
//Create "uploadrover()" function.
    function uploadrover() {
        ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height); //Draw image of rover
    }

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Write code if keypressed is up. ASCII value of "up" arrow is 38.
	 if(keyPressed=='38')
     {
       up();
       console.log("up");
     }
     //Write code if keypressed is down. ASCII value of "up" arrow is 40.
     if(keyPressed=='40')
     {
       down();
       console.log("down");
     }	
    //Additional Activity
    //Write the code for left and right arrow pressed. 
    if(keyPressed=='37')
     {
       left();
       console.log("left");
     }
     if(keyPressed=='39')
     {
       right();
       console.log("right");
     }
}

function up(){
if(rover_y >=0) 
{
  rover_y = rover_y -10;
  console.log("WHEN UP ARROW IS PRESSED,x = "+rover_x+"│ y ="+rover_y);
  uploadBackground();
  uploadrover();
}
}
function down(){
if(rover_y <=500) 
{
  rover_y = rover_y +10;
  console.log("WHEN DOWN ARROW IS PRESSED,x = "+rover_x+"│ y ="+rover_y);
  uploadBackground();
  uploadrover();
}
}
function right(){
if(rover_x <=700) 
{
  rover_x = rover_x +10;
  console.log("WHEN RIGHT ARROW IS PRESSED,x = "+rover_x+"│ y ="+rover_y);
  uploadBackground();
  uploadrover();
}	
}
function left(){
if(rover_x >=0) 
{
  rover_x = rover_x-10;
  console.log("WHEN LEFT ARROW IS PRESSED,x = "+rover_x+"│ y ="+rover_y);
  uploadBackground();
  uploadrover();
}	
}



