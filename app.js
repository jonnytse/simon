const onload = () =>  {

    let computerFULLMovesArray = [];
    let computerMovesArray = [];
    let playerMovesArray = [];
    const numberOfRounds = 10;
    let round = 0;
    let computerTurn;

    const startButton = $("#start-reset");
    const greenButton = $("#greenQuad");
    const redButton = $("#redQuad");
    const blueButton = $("#blueQuad");
    const yellowButton = $("#yellowQuad");
    const turnCount = $(".count")

    // console.log($(".box").index(greenButton));
    // console.log($(".box").index(redButton));
    // console.log($(".box").index(yellowButton));
    // console.log($(".box").index(blueButton));

    $(startButton).click(function() {
        win = false;
        computerFULLMovesArray = [];
        computerMovesArray = [];
        playerMovesArray = [];
        round = 0;
        for (i = 0; i < numberOfRounds; i++) {
            computerFULLMovesArray.push((Math.floor(Math.random()*4)));
        };
        console.log(computerFULLMovesArray);
        console.log(round);

        // for (i = 0; i < numberOfRounds; i++){
        //     computerMovesArray.push(computerFULLMovesArray[i]);
        //     console.log(computerMovesArray);
        // }

        computerMovesArray = computerFULLMovesArray.slice(0,round + 1);
        flash($(".box").eq(computerMovesArray[0]));
    });

    const flash = (element) => {
        $(element).animate({opacity: 0.2}, 50, function() {
            setTimeout(function() {
                $(element).animate({opacity: 1.0})
            }, 400);
        });  
    }

    //OPACITY CLICK
    $(".box").click(function(event) {
        // console.log($(this).index(".box")); //this console.logs index
        let playerMove = $(this).index(".box");
        playerMovesArray.push(playerMove);
        console.log(playerMovesArray); 
        flash(event.target);
        
        for (let i = 0; i < playerMovesArray.length; i++) {
            if (playerMovesArray[i] !== computerMovesArray[i]) {
                console.log("wrong");
                return;
                // return loss(round);
            }
        }
        // for (i = 0; i <= round; i++) {
        if (playerMovesArray.length === computerMovesArray.length) {
            // roundWin()
            console.log("correct");
            round++;
            computerMovesArray = computerFULLMovesArray.slice(0,round + 1);
            console.log(computerMovesArray);
            playerMovesArray = []; 
            // Flash each element in the computer moves array in turn


        }
        // };    
    }); 


}; //const onload closing curly braces
$(onload);

// for (i = 0; i < playerMovesArray.length; i++) {
//     if (playerMovesArray[i] === computerMovesArray[i]) {
//         console.log('correct');
//         if (playerMovesArray.length === computerMovesArray.length) {
//             round++;
//             computerMovesArray = computerFULLMovesArray.slice(0, round + 1);
//             console.log('New moves: ' + computerMovesArray);
//             playerMovesArray = [];
//         }
//     } else {
//         alert('Game over!');
//         console.log('incorrect');
//     }
// }