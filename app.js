const onload = () =>  {

    let computerFULLMovesArray = [];
    let computerMovesArray = [];
    let playerMovesArray = [];
    const numberOfRounds = 10;
    let gameMove = 0;
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
        gameMove = 0;
        for (i = 0; i < numberOfRounds; i++) {
            computerFULLMovesArray.push((Math.floor(Math.random()*4)));
        };
        console.log(computerFULLMovesArray);
        console.log(gameMove);

        // for (i = 0; i < numberOfRounds; i++){
        //     computerMovesArray.push(computerFULLMovesArray[i]);
        //     console.log(computerMovesArray);
        // }

        computerMovesArray = computerFULLMovesArray.slice(0,gameMove + 1);
        console.log(computerMovesArray);
    });

    //OPACITY CLICK
    $(".box").click(function(event) {
        // console.log($(this).index(".box")); //this console.logs index
        playerMovesArray.push($(this).index(".box"));
        console.log(playerMovesArray);
        $(event.target).animate({opacity: 0.3}, 50, function() {
            setTimeout(function() {
                $(event.target).animate({opacity: 1.0})
            }, 100);
        });    

        let playerMove = $(this).index(".box");

        for (i = 0; i < gameMove + 1; i++) {
            if ((playerMove === computerMovesArray[gameMove]) && (playerMovesArray.length === computerMovesArray.length)) {
            // if (playerMovesArray === computerMovesArray) {
            // if ((playerMove) === (computerMovesArray[gameMove]) && (playerMovesArray === computerMovesArray)) {
                console.log("correct");
                gameMove++;
                console.log(gameMove);
                computerMovesArray = computerFULLMovesArray.slice(0,gameMove + 1);
                console.log(computerMovesArray);
                playerMovesArray = []; 
            // } else {
            //     console.log("Sorry...you lose");
                // } else if ((playerMove !== computerMovesArray[gameMove]) && (playerMovesArray.length !== computerMovesArray.length)) {
                //        console.log("Sorry...you lose"); 
                // } else if (playerMovesArray !== computerMovesArray) { 
                //     console.log("Sorry...you lose");
                } else {
                    for (i = 0; i < computerMovesArray.length; i++) {
                        if (playerMove !== computerMovesArray[i]) {
                            console.log ("Sorry...you lose");
                        }
                    }
                } 
        }
    }); 
//The above can't handle duplicate numbers, AND it does not account for "incorrect" answers


}; //const onload closing curly braces
$(onload);

// if (playerMove === computerFULLMovesArray[gameMove]) {
//     console.log("correct!!!!");
// }
// gameMove++;