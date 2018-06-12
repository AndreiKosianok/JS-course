let	ball = document.getElementById('ball'),
	start = document.getElementById('start'),
	stop = document.getElementById('stop'),
	animateBall;
	position = 50;

function ballMove() {
	position = position + 50;
	ball.style.left = position + 'px';
	if (position >= 900) {
		position = 0;
	}
   animateBall = requestAnimationFrame(ballMove);
}

animateBall = requestAnimationFrame(ballMove);

start.onclick = function() {
    animateBall = requestAnimationFrame(ballMove);
};
stop.onclick = function() {
    cancelAnimationFrame(animateBall);
};