# Genius-game

### Memory Game

This is a memory game implemented in JavaScript. The game presents a sequence of colored tiles to the player, who must then click on the tiles in the same order. The player's score increases with each successful round. The game continues until the player makes a mistake.

**How to Play**
1. Click on the "Start" button to begin the game.
2. Pay attention to the sequence in which the colored tiles light up.
3. Click on the tiles in the same order to repeat the sequence.
4. Your score increases with each correct sequence.
5. If you make a mistake, the game ends, and your score is displayed.

**Code Structure**
- `Color` object defines color constants for the game.
- `colorElements` object stores references to HTML elements for each color tile.
- `scoreElement` stores the score display element.
- `order` and `clickedOrder` arrays track the game's sequence.
- `getRandomColor` generates a random color index.
- `lightColor` highlights a color tile briefly.
- `createColorElement` returns a color tile element.
- `checkOrder` compares the player's input with the game sequence.
- `handleColorClick` is the click event handler for color tiles.
- `nextLevel` advances to the next round, adding a color to the sequence.
- `gameOver` ends the game and displays the final score.
- `playGame` initializes the game.

**How to Run**
1. Clone this repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Click the "Start" button to begin the game.

---

### Jogo da Memória

Este é um jogo de memória implementado em JavaScript. O jogo apresenta uma sequência de peças coloridas ao jogador, que deve então clicar nas peças na mesma ordem. A pontuação do jogador aumenta a cada rodada bem-sucedida. O jogo continua até que o jogador cometa um erro.

**Como Jogar**
1. Clique no botão "Start" para começar o jogo.
2. Preste atenção à sequência em que as peças coloridas acendem.
3. Clique nas peças na mesma ordem para repetir a sequência.
4. Sua pontuação aumenta a cada sequência correta.
5. Se você cometer um erro, o jogo termina e sua pontuação é exibida.

**Estrutura do Código**
- O objeto `Color` define constantes de cor para o jogo.
- O objeto `colorElements` armazena referências a elementos HTML para cada peça colorida.
- `scoreElement` armazena o elemento de exibição da pontuação.
- As arrays `order` e `clickedOrder` rastreiam a sequência do jogo.
- `getRandomColor` gera um índice de cor aleatório.
- `lightColor` destaca brevemente uma peça de cor.
- `createColorElement` retorna um elemento de peça de cor.
- `checkOrder` compara a entrada do jogador com a sequência do jogo.
- `handleColorClick` é o manipulador de evento de clique para as peças de cor.
- `nextLevel` avança para a próxima rodada, adicionando uma cor à sequência.
- `gameOver` encerra o jogo e exibe a pontuação final.
- `playGame` inicializa o jogo.

**Como Executar**
1. Clone este repositório em sua máquina local.
2. Abra o arquivo `index.html` em um navegador da web.
3. Clique no botão "Start" para começar o jogo.
