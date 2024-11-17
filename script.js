//object to create the game board 
function gameBoard(){
return {
    board:[ null, null, null,
            null, null, null,
        "test", null, null
    ]
}
}

//player object
function player(name, marker) {
 
    return {name,marker}

}

//Instantiate player Mark
const Mark = player("Mark", "X")

console.log(Mark.marker)

//instantiate player David 
const David = player("David Smith", "O")

console.log(David.marker)

//objection 
function gamePlay (playerMarker, squareNumber) {
console.log(`Mark's marker is ${Mark.marker}`)
console.log(`David's marker is ${David.marker}`)
let squares = gameBoard();
console.log(squares.board[6])
}

gamePlay(Mark, David)

