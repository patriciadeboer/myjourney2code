
//Ball 2

const ball2= document.querySelector("div.ball2")

let mouse2X=0;
let mouse2Y=0;

function animate(){
	ball2.style.left = mouse2X + "px"
	ball2.style.top = mouse2Y + "px"

	requestAnimationFrame(animate)
}

animate()

document.addEventListener("mousemove",function(event){
	mouse2X=event.pageX
	mouse2Y=event.pageY
})
