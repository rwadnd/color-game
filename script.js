var color = "#32a852"
var colorText = document.getElementById("text")
colorText.innerText += " " + color;

document.body.addEventListener("mousemove", track);

function track(e){
    console.log(e.type);
    var body = document.getElementById("body");
    body.style.backgroundColor = "rgb("+e.clientX+","+e.clientY+",20)"
    var combination = rgbToHex(e.clientX, e.clientY ,20)
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }