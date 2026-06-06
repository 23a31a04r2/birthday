for(let i=0;i<50;i++){

let heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="absolute";

heart.style.left=Math.random()*100+"%";

heart.style.top=Math.random()*100+"%";

heart.style.fontSize="30px";

document.body.appendChild(heart);

}