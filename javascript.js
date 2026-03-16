```javascript

const btn = document.getElementById("themeBtn");


function darkTheme(){

document.body.style.backgroundColor = "#121212";
document.body.style.color = "white";

document.querySelector("header").style.backgroundColor = "#000";
document.querySelector("nav").style.backgroundColor = "#111";
document.querySelector("footer").style.backgroundColor = "#000";

btn.textContent = "☀️";

}


function lightTheme(){

document.body.style.backgroundColor = "#fafafa";
document.body.style.color = "#333";

document.querySelector("header").style.backgroundColor = "#6d4c41";
document.querySelector("nav").style.backgroundColor = "#3e2723";
document.querySelector("footer").style.backgroundColor = "#3e2723";

btn.textContent = "🌙";

}

window.onload = function(){

if(localStorage.getItem("theme") === "dark"){
darkTheme();
}

};

btn.onclick = function(){

if(localStorage.getItem("theme") !== "dark"){

darkTheme();
localStorage.setItem("theme","dark");

}
else{

lightTheme();
localStorage.setItem("theme","light");

}

};
```
