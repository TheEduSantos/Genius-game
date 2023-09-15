const Color = {
    GREEN: 0,
    RED: 1,
    ORANGE: 2,
    BLUE: 3,
};

const colorElements = {
    [Color.GREEN]: document.querySelector('.green'),
    [Color.RED]: document.querySelector('.red'),
    [Color.ORANGE]: document.querySelector('.orange'),
    [Color.BLUE]: document.querySelector('.blue'),
};

const scoreElement = document.getElementById('score');

let order = [];
let clickedOrder = [];
let score = 0;

const getRandomColor = () => Math.floor(Math.random() * 4);

const lightColor = (color) => {
    const element = colorElements[color];
    element.classList.add('selected');
    setTimeout(() => {
        element.classList.remove('selected');
    }, 500);
};

const createColorElement = (color) => colorElements[color];

const checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] !== order[i]) {
            gameOver();
            return;
        }
    }
    if (clickedOrder.length === order.length) {
        score++;
        scoreElement.textContent = score;
        nextLevel();
    }
};

const handleColorClick = (color) => {
    clickedOrder.push(color);
    createColorElement(color).classList.add('selected');
    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
};

const nextLevel = () => {
    order.push(getRandomColor());
    clickedOrder = [];
    order.forEach((color, index) => {
        setTimeout(() => {
            lightColor(color);
        }, (index + 1) * 1000);
    });
};

const gameOver = () => {
    alert(`Score: ${score}!\nYou lost the game!\nClick OK to start a new game`);
    order = [];
    clickedOrder = [];

    playGame();
}

const playGame = () => {
    score = 0;
    scoreElement.textContent = score;
    nextLevel();
};

Object.values(Color).forEach((color) => {
    colorElements[color].addEventListener('click', () => handleColorClick(color));
});

playGame();
