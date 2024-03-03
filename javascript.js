let p1;
let p2;

let game = (function() {
    let currentPlayer;
    let tieCounter = 0;
    let modal = document.querySelector(`dialog`);
    let display = document.querySelector(`#display`);
    let cont = document.querySelector(`#container`);

    modal.showModal();    
    let start = document.querySelector(`dialog button`);
    start.addEventListener('click', () => {
        p1 = createPlayer(document.querySelector(`#p1`).value);
        p2 = createPlayer(document.querySelector(`#p2`).value);
        currentPlayer = p1.name;
        gameboard.updateDisplay(currentPlayer);
        modal.close();
    });

    let restart = document.querySelector(`#container + button`);
    restart.addEventListener('click', () => {
        gameboard.board = [];
        gameboard.displayBoard();
        gameboard.marker = 'X';
        tieCounter = 0;
        currentPlayer = p1.name;
        gameboard.updateDisplay(currentPlayer);
    });

    cont.addEventListener('click', (event) => {
        let spot = event.target;
        let index = spot.getAttribute('id').split('t')[1];

        if (gameboard.board[index]);
        else {
            gameboard.board[index] = gameboard.marker;
            tieCounter++;   
            gameboard.displayBoard();

            let action = gameboard.checkBoard(gameboard.marker);
            if (action === 'end') {
                display.textContent = `${currentPlayer}(${gameboard.marker}) wins!`;              
            } else if (tieCounter === 9) {
                display.textContent = `It's a TIE!`;
            } else {
                currentPlayer = (currentPlayer == p1.name) ? p2.name : p1.name;
                gameboard.marker = (gameboard.marker == 'X') ? 'O' : 'X';
                gameboard.updateDisplay(currentPlayer);                
            }           
        }       
    });
    return { display, currentPlayer };
})();

let gameboard = (function() {    
    let board = [];
    let marker = 'X';                    

    function updateDisplay(currentPlayer) {
        game.display.textContent = `${currentPlayer}'s turn ( ${marker} )`;            
    }       

    function displayBoard() {
        for (let i = 0; i < 9; i++) {
            let spot = document.querySelector(`#spot${i}`);
            spot.textContent = board[i]                
        }
    }
    displayBoard(); 
    
    function checkBoard(marker) {
        if (board[0] === marker && board[1] === marker && board[2] === marker) {
            return 'end';
        } else if (board[3] === marker && board[4] === marker && board[5] === marker) {
            return 'end';
        } else if (board[6] === marker && board[7] === marker && board[8] === marker) {
            return 'end';
        } else if (board[0] === marker && board[3] === marker && board[6] === marker) {
            return 'end';
        } else if (board[1] === marker && board[4] === marker && board[7] === marker) {
            return 'end';
        } else if (board[2] === marker && board[5] === marker && board[8] === marker) {
            return 'end';
        } else if (board[0] === marker && board[4] === marker && board[8] === marker) {
            return 'end';
        } else if (board[2] === marker && board[4] === marker && board[6] === marker) {
            return 'end';
        }
    }        
    return { updateDisplay, board, marker, displayBoard, checkBoard };
})();

function createPlayer (name) {    
    return { name };
}