const onload = () =>  {

    let computerFULLMovesArray = [];
    let computerMovesArray = [];
    let playerMovesArray = [];
    const numberOfRounds = 10;
    let round = 0;

    const startButton = $("#start-reset");
    const greenButton = $("#greenQuad");
    const redButton = $("#redQuad");
    const blueButton = $("#blueQuad");
    const yellowButton = $("#yellowQuad");
    const turnCount = $(".count")

    $(startButton).click(function() {
        alert("\nTEST YOUR SHORT TERM MEMORY: \n\n1) Watch the colours flash in sequence below. \n2) Use your observation skills to memorise the sequence. \n3) Simply click what you see...it's as easy as that! \n4) Get ready for your first *CLICK*...");
        computerFULLMovesArray = [];
        computerMovesArray = [];
        playerMovesArray = [];
        round = 0;
        for (i = 0; i < numberOfRounds; i++) {
            computerFULLMovesArray.push((Math.floor(Math.random()*4)));
        };
        // console.log(computerFULLMovesArray);
        // console.log("Round: " + round);

        computerMovesArray = computerFULLMovesArray.slice(0,round + 1);
        // console.log(computerMovesArray);
        setTimeout(() => {
            flash($(".box").eq(computerMovesArray[0]));
        }, 1500);    
    });

    const flash = (element) => {
        $(element).animate({opacity: 0.1}, 50, function() {
            setTimeout(() => {
                $(element).animate({opacity: 1.0})
            }, 200);
        });  
    }

    //OPACITY CLICK
    $(".box").click(function(event) {
        // console.log($(this).index(".box")); //this console.logs index
        let playerMove = $(this).index(".box");
        playerMovesArray.push(playerMove);
        // console.log(playerMovesArray); 
        flash(event.target);
        
        for (let i = 0; i < playerMovesArray.length; i++) {
            if (playerMovesArray[i] !== computerMovesArray[i]) {
                console.log("wrong");
                alert("\n                                   *****  GAME OVER  *****\n\n                                           Your score is: " + round);
                return;
                // return loss(round);
            }
        }
     
        if (playerMovesArray.length === computerMovesArray.length) {
            roundWin();
            // console.log("correct");
            // round++;
            // console.log("Correct clicks: " + round);
            // computerMovesArray = computerFULLMovesArray.slice(0,round + 1);
            // // console.log(computerMovesArray);
            // playerMovesArray = []; 
            // // Flash each element in the computer moves array in turn
            // computerMovesArray.forEach((move, index) => {
            //     setTimeout(() => {
            //         flash($(".box").eq(move));
            //     }, index*700 + 2000);
            // })
        }
    }); 

    const roundWin = () => {
        round++;
        console.log("Correct clicks: " + round);
        computerMovesArray = computerFULLMovesArray.slice(0, round + 1);
        // console.log(computerMovesArray);
        playerMovesArray = [];
        computerMovesArray.forEach((move, index) => {
            setTimeout(() => {
                flash($(".box").eq(move));
            }, index*700 + 2000);
        })    
    }

}; //const onload closing curly braces
$(onload);
