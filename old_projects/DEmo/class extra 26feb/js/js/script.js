var array = document.all

console.log(array)

console.log(document.getElementById("heading"))
document.getElementById("heading").style.color = "#12FFF7"

var title = document.getElementById("heading")
title.style.backgroundColor = "red"

var para = document.getElementById("par")
para.style.color = "#B3FFAB"
para.innerHTML = "Changed"

var boxes = document.getElementsByClassName("box")
console.log(boxes)
boxes[0].style.backgroundColor = "Yellow"