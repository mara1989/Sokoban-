let currentMap = [];
let playerPos = { x: 0, y: 0 };
let moveCount = 0;
let goals = 0;
let isGameFinished = false;


const gameBoardEl = document.getElementById('board');
const movesEl = document.getElementById('moves');
const statusEl = document.getElementById('status');
const restartButton = document.getElementById('restart');


function initializeGame() {
    moveCount = 0;
    goals = 0;
    isGameFinished = false;

    currentMap = tileMap01.mapGrid.map(row => row.map(cell => [...cell]));

    for (let y = 0; y < tileMap01.height; y++) {
        for (let x = 0; x < tileMap01.width; x++) {
            const cellChar = currentMap[y][x][0];
            if (cellChar === 'P') {
                playerPos = { x, y };
                currentMap[y][x][0] = ' ';
            } else if (cellChar === 'G') {
                goals++;
            }
        }
    }

    movesEl.textContent = `Moves: ${moveCount}`;
    statusEl.textContent = 'Use Arrow Keys to play!';
    drawMap();
}

function drawMap() {
    gameBoardEl.innerHTML = '';
    gameBoardEl.style.gridTemplateColumns = `repeat(${tileMap01.width}, var(--tile-size))`;

    for (let y = 0; y < tileMap01.height; y++) {
        for (let x = 0; x < tileMap01.width; x++) {
            const cell = currentMap[y][x];
            const tileChar = cell[0];
            const tileDiv = document.createElement('div');
            tileDiv.classList.add('tile');


            if (tileChar === 'W') tileDiv.classList.add(Tiles.Wall);
            else if (tileChar === 'G') tileDiv.classList.add(Tiles.Goal);
            else tileDiv.classList.add(Tiles.Space);

            // Foreground
            const entityChar = cell.length > 1 ? cell[1] : null;
            if (entityChar === 'B' || (x === playerPos.x && y === playerPos.y)) {
                const entityDiv = document.createElement('div');
                entityDiv.classList.add('entity');
                if (x === playerPos.x && y === playerPos.y) {
                    entityDiv.classList.add(Entities.Character);
                } else if (entityChar === 'B') {
                    const isOnGoal = tileChar === 'G';
                    entityDiv.classList.add(isOnGoal ? Entities.BlockDone : Entities.Block);
                }
                tileDiv.appendChild(entityDiv);
            }

            gameBoardEl.appendChild(tileDiv);
        }
    }
}


function getCell(x, y) {
    if (y >= 0 && y < tileMap01.height && x >= 0 && x < tileMap01.width) {
        return currentMap[y][x];
    }
    return null;
}

function attemptMove(dx, dy) {
    if (isGameFinished) return;

    const nextX = playerPos.x + dx;
    const nextY = playerPos.y + dy;
    const nextCell = getCell(nextX, nextY);

    if (!nextCell || nextCell[0] === 'W') return;

    const entityAtNext = nextCell.length > 1 ? nextCell[1] : null;
    let moveMade = false;

    if (entityAtNext === null) {
        playerPos = { x: nextX, y: nextY };
        moveMade = true;
    } else if (entityAtNext === 'B') {
        const pushX = nextX + dx;
        const pushY = nextY + dy;
        const pushCell = getCell(pushX, pushY);
        if (pushCell && pushCell[0] !== 'W' && pushCell.length === 1) {
            const tileUnderBlock = nextCell[0];
            currentMap[pushY][pushX] = [pushCell[0], 'B'];
            currentMap[nextY][nextX] = [tileUnderBlock];
            playerPos = { x: nextX, y: nextY };
            moveMade = true;
        }
    }

    if (moveMade) {
        moveCount++;
        movesEl.textContent = `Moves: ${moveCount}`;
        drawMap();
        checkWinCondition();
    }
}

function checkWinCondition() {
    let blocksOnGoal = 0;
    for (let y = 0; y < tileMap01.height; y++) {
        for (let x = 0; x < tileMap01.width; x++) {
            const cell = currentMap[y][x];
            if (cell[0] === 'G' && cell[1] === 'B') {
                blocksOnGoal++;
            }
        }
    }
    if (blocksOnGoal === goals && goals > 0) {
        isGameFinished = true;
        statusEl.textContent = '🎉 Congratulations! You solved the puzzle!';
    }
}


function handleKeyDown(event) {
    if (isGameFinished) return;
    let dx = 0, dy = 0;
    if (event.key === 'ArrowUp') dy = -1;
    else if (event.key === 'ArrowDown') dy = 1;
    else if (event.key === 'ArrowLeft') dx = -1;
    else if (event.key === 'ArrowRight') dx = 1;
    else return;
    event.preventDefault();
    attemptMove(dx, dy);
}


document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
    document.addEventListener('keydown', handleKeyDown);
    restartButton.addEventListener('click', initializeGame);
});
