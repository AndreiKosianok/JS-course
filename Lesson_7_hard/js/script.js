let	ball = document.getElementById('ball'),
	start = document.getElementById('start'),
	stop = document.getElementById('stop'),
	position = 50;


function ballMove() {
	position = position + 50 + 'px';
	ball.style.left = (position + 'px');
	if (position >= 900) {
		position = 0;
	}
    requestAnimationFrame(ballMove)
}
start.onclick = function() {
	requestAnimationFrame(ballMove);
};
stop.onclick = function() {
	cancelAnimationFrame(ballMove);
};