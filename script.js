const field = document.getElementById('field');
const ball = document.getElementById('ball');
const goal = document.getElementById('goal');
const scoreDisplay = document.getElementById('score');

let score = 0;


ball.style.left = '0px';
ball.style.top = '0px';

field.addEventListener('click', (event) => {

    const fieldRect = field.getBoundingClientRect();


    const ballDiameter = ball.offsetWidth;
    const ballRadius = ballDiameter / 2;


    let x = event.clientX - fieldRect.left - ballRadius;
    let y = event.clientY - fieldRect.top - ballRadius;


    const maxX = field.clientWidth - ballDiameter;
    const maxY = field.clientHeight - ballDiameter;


    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));


    requestAnimationFrame(() => {
        ball.style.left = x + 'px';
        ball.style.top = y + 'px';
    });


    ball.addEventListener('transitionend', checkGoal, { once: true });
});

function checkGoal() {
    const ballRect = ball.getBoundingClientRect();
    const goalRect = goal.getBoundingClientRect();

    const isInsideGoal =
        ballRect.left >= goalRect.left &&
        ballRect.right <= goalRect.right &&
        ballRect.top >= goalRect.top &&
        ballRect.bottom <= goalRect.bottom;

    if (isInsideGoal) {
        score++;
        scoreDisplay.textContent = score;
    }
}
