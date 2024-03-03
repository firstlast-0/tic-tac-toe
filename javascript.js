let game = (function() {

    return { };
})();

let gameboard = (function() {
    let board = ['X', 'O', 'X', '', 'X'];
    let cont = document.querySelector(`#container`);
    let marker = 'X';

    cont.addEventListener('click', (event) => {
        let spot = event.target;
        let index = spot.getAttribute('id').split('t')[1];

        if (board[index]);
        else {
            board[index] = marker;
            marker = (marker == 'X') ? 'O' : 'X';
            displayBoard();
        }       
    });

    function displayBoard() {
        for (let i = 0; i < 9; i++) {
            if (board[i]) {
                let spot = document.querySelector(`#spot${i}`);
                spot.textContent = board[i]
            }        
        }
    }
    displayBoard();
    

    let p1 = createPlayer('user1');
    let p2 = createPlayer('user2');    

    function pick() {
        let msg = (marker == 'X') ? 'Spot for X' : 'Spot for O';
        let spot = prompt(msg);
        board[spot] = marker;
        
    }

    for (let i = 0; i < 9; i++) {
        break
        pick();
        function check(marker) {
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
    
    return { board };
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