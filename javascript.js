let game = (function() {

    return { };
})();

let p1;
let p2;
let modal = document.querySelector(`dialog`);
modal.showModal();
let currentPlayer;
let start = document.querySelector(`dialog button`);
start.addEventListener('click', () => {
    p1 = createPlayer(document.querySelector(`#p1`).value);
    p2 = createPlayer(document.querySelector(`#p2`).value);
    currentPlayer = p1.name;
    gameboard.updateDisplay(currentPlayer);
    modal.close();
});

let gameboard = (function() {
    let board = [];
    let marker = 'X';
    let tieCounter = 0;
    let cont = document.querySelector(`#container`);

    let restart = document.querySelector(`#container + button`);
    restart.addEventListener('click', () => {
        board = [];
        displayBoard();
        marker = 'X';
        tieCounter = 0;
        currentPlayer = p1.name;
        updateDisplay(currentPlayer);
    });
    
    let display = document.querySelector(`#display`);

    function updateDisplay(currentPlayer) {
        display.textContent = `${currentPlayer}'s turn ( ${marker} )`;            
    }   
        
    cont.addEventListener('click', (event) => {
        let spot = event.target;
        let index = spot.getAttribute('id').split('t')[1];

        if (board[index]);
        else {
            board[index] = marker;
            tieCounter++;   
            displayBoard();

            let action = checkBoard(marker);
            if (action === 'end') {
                display.textContent = `${currentPlayer}(${marker}) wins!`;              
            } else if (tieCounter === 9) {
                display.textContent = `It's a TIE!`;
            } else {
                currentPlayer = (currentPlayer == p1.name) ? p2.name : p1.name;
                marker = (marker == 'X') ? 'O' : 'X';
                updateDisplay(currentPlayer);                
            }           
        }       
    });

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

    for (let i = 0; i < 9; i++) {
        break        
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
        
        let end = check('X');
        if (end === 'end') break;
        else if (i === 8) {
            console.log('draw');
            break
        }
    }
    
    return { updateDisplay };
})();

function createPlayer (name) {    
    return { name };
}

// let xCount = 0;
// for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < row1.length; j++) {
//         if (board[i][j] === 'x') xCount++;
//     }
// }
// if (xCount === 3) {
//     console.log('X Player wins');
//     break
// }