let	ball = document.getElementById('ball'),
	stop = document.getElementById('stop'),
	position = 50;

function ballMove() {
	let rotateBall = 'rotate(' + position.toString() + 'deg)'
	position = position + 5;
	ball.style.transform = rotateBall;
	ball.style.left = position + 'px';
	if (position >= 900) {
		position = 0;
	}
   animateBall = requestAnimationFrame(ballMove);
}

start.onclick = function() {
    animateBall = requestAnimationFrame(ballMove);
};
stop.onclick = function() {
    cancelAnimationFrame(animateBall);
};