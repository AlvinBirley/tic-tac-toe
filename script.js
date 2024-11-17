//object to create the game board 
function gameBoard(){
return {
    board:[ null, null, null,
            null, null, null,
        "test", null, null
    ]
}
}

//player one object 
function playerOne(nameOne) {
    //player One marker
    const markerOne = "X"

    return {nameOne,markerOne}

}

//instantiate playerOne object
const Mark = playerOne("Mark Csernus");

function playerTwo(nameTwo) {
    //player Two marker 
    const markerTwo = "O"

    return {nameTwo, markerTwo}
}

//instantiate playerTwo object
const David = playerTwo("David Smith")

console.log(David.markerTwo)

