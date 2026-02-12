const div = document.createElement("div");
const h1 = document.createElement('h1');
h1.textContent = 'hello COLLEGE';
h1.style.color = 'red'
h1.style.backgroundColor = 'yellow'
h1.style.marginLeft = '30px'
div.appendChild(h1);
const rootDiv = document.getElementById("root");
rootDiv.appendChild(div);
