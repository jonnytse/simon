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

    console.log($(".box").index(greenButton));
    console.log($(".box").index(redButton));
    console.log($(".box").index(yellowButton));
    console.log($(".box").index(blueButton));

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

        for (i = 0; i < numberOfRounds; i++){
            computerMovesArray.push(computerFULLMovesArray[i]);
            console.log(computerMovesArray);
        }

        // computerMovesArray = computerFULLMovesArray.splice(0,1);
        // console.log(computerMovesArray);
      
    });

    //OPACITY CLICK
    $(".box").click(function(event) {
        // console.log($(this).index(".box")); //this console.logs index
        playerMovesArray.push($(".box").index(this));
        console.log(playerMovesArray);
        $(event.target).animate({opacity: 0.3}, 50, function() {
            setTimeout(function() {
                $(event.target).animate({opacity: 1.0})
            }, 100);
        });    

        let playerMove = $(".box").index(this);
        if ((playerMove) === computerFULLMovesArray[gameMove]) {
            console.log("correct");
            gameMove++;
        } else {
            console.log("Sorry you lose");
            // $(".box").off("click");
        }
    }); 



}; //const onload closing curly braces
$(onload);

// if (playerMove === computerFULLMovesArray[gameMove]) {
//     console.log("correct!!!!");
// }
// gameMove++;