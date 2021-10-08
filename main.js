var color_var=document.getElementById("color").value;
var radius_var=document.getElementById("radius").value;
var mouseEvent="empty";
var last_Position_of_X, last_Position_of_Y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color=color_var;
radius=radius_var;
width_of_line=3;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown"
    }
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
   current_position_of_mouse_X=e.clientX-canvas.offsetLeft;
   current_position_of_mouse_Y=e.clientY-canvas.offsetTop;
   if(mouseEvent=="mousedown"){
       ctx.beginPath();
       ctx.strokeStyle=color_var;
       ctx.lineWidth=width_of_line;
       ctx.arc(current_position_of_mouse_X,current_position_of_mouse_Y,radius_var,0,2* Math.PI)
       
       console.log("last position of X and Y coordinates=");
       console.log("x="+last_Position_of_X+"y="+last_Position_of_Y);
   ctx.moveTo(last_Position_of_X,last_Position_of_Y);
   console.log("current position of X and Y coordinates=");
   console.log("X="+current_position_of_mouse_X+"Y="+current_position_of_mouse_Y);
   ctx.lineTo(current_position_of_mouse_Y,current_position_of_mouse_Y);
   ctx.stroke();
   }    
   last_Position_of_X=current_position_of_mouse_X;
   last_Position_of_Y=current_position_of_mouse_Y;
   }
   canvas.addEventListener("mouseup",my_mouseup);
   function my_mouseup(e){
       mouseEvent="mouseup";
   }   
   canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
