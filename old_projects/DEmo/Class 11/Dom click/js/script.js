var title = document.getElementById("heading")

var button = document.getElementById("button") 
console.log(button)

button.addEventListener("click",funcname)

function funcname()
{
    console.log("clicked asdsad ");
    title.style.display = "none"
    document.getElementById("par").innerHTML = "Button clicked"
    document.getElementById("par").style.backgroundColor = "#65C6BB"
}