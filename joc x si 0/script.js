let cellContent = ["", "", "", "", "", "", "", "", ""];
let turn = 0;
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let buttonClick = function (CallingElement){
    elementName = CallingElement.className;
    position = parseInt(elementName.slice(-1));
    
    //check if game is over

    for(let i = 0; i < winningCombinations.length; i++){
        let aux = winningCombinations[i];
        //aux.map(cellCheck => if(cellContent[cellCheck] === "x" || cellContent[cellCheck] === "0"))
        let a, b, c;
        
        a = cellContent[aux[0]];
        b = cellContent[aux[1]];
        c = cellContent[aux[2]];
        
        if(a === b && b === c){
            break;
            alert("game over");
        }
    }
    
    if (turn === 0 && cellContent[position] === ""){
        cellContent[position] = "x";
        CallingElement.textContent = "x";
        turn = 1;
    }
    else if(turn === 1 && cellContent[position] === ""){
        cellContent[position] = "0";
        CallingElement.textContent = "0";
        turn = 0;
    }
    
    
    console.log(position);
}