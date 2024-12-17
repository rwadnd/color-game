var color = "#c8c814"
var colorText = document.getElementById("text")
colorText.innerText += " " + color;

document.body.addEventListener("mousemove", track);
document.getElementById("display").style.backgroundColor = color;
function track(e){
    
    var X = Math.floor(e.clientX / 4)
    var Y = Math.floor(e.clientY / 2)
    var string = "rgb("+ X +","+ Y +",20)"
    console.log(string);
    var body = document.getElementById("body");
    body.style.backgroundColor = string
    var combination = rgbToHex(X, Y ,20)
    console.log(combination)
    if(combination === color){
        alert("You have won!!")
    }
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }