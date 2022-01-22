var mouseEvent = "empty";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;
var radius;
canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value ; 
    width_of_line = document.getElementById("width").value ;
    radius = document.getElementById("radius").value ;
    mouseEvent = "mousedown";
}
canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e){
    mouseEvent = "mousemove";
}
function my_mousemove(e){
    current_position_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown"){
        console.log("Current position of x and y coordinates = ");
        console.log("x =" + current_position_mouse_x + "y =" + current_position_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_mouse_x, current_position_mouse_y, 10 , radius, 360);
        ctx.stroke();
    }
    
}