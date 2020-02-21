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
        console.log(computerMovesArray);
    });

    //OPACITY CLICK
    $(".box").click(function(event) {
        // console.log($(this).index(".box")); //this console.logs index
        let playerMove = $(this).index(".box");
        playerMovesArray.push(playerMove);
        console.log(playerMovesArray);

        $(event.target).animate({opacity: 0.3}, 50, function() {
            setTimeout(function() {
                $(event.target).animate({opacity: 1.0})
            }, 100);
        });    

        for (i = 0; i <= round; i++) {
            if ((playerMove === computerMovesArray[round]) && (playerMovesArray.length === computerMovesArray.length)) {
                console.log("correct");
                round++;
                console.log(round);
                computerMovesArray = computerFULLMovesArray.slice(0,round + 1);
                console.log(computerMovesArray);
                playerMovesArray = []; 
            // } else if ((playerMovesArray.length > 0) && (playerMove !== computerMovesArray[round])) {
            //     console.log("nope");
            } 
            
            // else computerMovesArray.forEach((computerMove, index) => {
            //        console.log(index, computerMove);
            //       if ((playerMovesArray.length > 0) && (playerMove !== computerMove[index])) {
            //           console.log("nope");
            //       }
                
            // });
        }
    }); 


}; //const onload closing curly braces
$(onload);
