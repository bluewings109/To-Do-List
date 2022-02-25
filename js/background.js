const images = ["0.jpeg", "1.jpeg", "2.jpeg" ,"3.jpeg"];

const imgTag = document.createElement("img");
imgTag.src=`img/${images[Math.floor(Math.random()*images.length)]}`;

imgTag.classList.add("bg-img");
document.body.appendChild(imgTag);
