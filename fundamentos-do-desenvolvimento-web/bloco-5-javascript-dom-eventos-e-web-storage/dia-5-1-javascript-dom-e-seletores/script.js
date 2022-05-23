document.getElementById("titulo").style.backgroundColor = "green";
document.getElementById("titulo").style.padding = "15px";
document.querySelectorAll(".emergency-tasks h3")[0].style.backgroundColor = "red";
document.querySelectorAll(".emergency-tasks h3")[1].style.backgroundColor = "red";
document.querySelectorAll(".no-emergency-tasks h3")[0].style.backgroundColor = "blue";
document.querySelectorAll(".no-emergency-tasks h3")[1].style.backgroundColor = "blue";
let divs = document.getElementsByTagName("section");
for (let index = 0; index < divs.length; index += 1){
    divs[index].style.backgroundColor = "gray"
}