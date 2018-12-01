
//Ball 1 
document.addEventListener("mousemove",function(movement){
	const mouse1X=movement.pageX

	const mouse1Y=movement.pageY

	const ball1= document.querySelector("div.ball1")

	ball1.style.left = mouse1X + "px"
	ball1.style.top = mouse1Y + "px"


})
