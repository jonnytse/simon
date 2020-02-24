const onload = () => {  

    let computerFULLMovesArray = [];
    let computerMovesArray = [];
    let playerMovesArray = [];
    const numberOfRounds = 50;
    let round = 0;

    const startButton = $("#start-reset");
    const turnCount = $(".count")
    // const greenButton = $("#greenQuad");
    // const redButton = $("#redQuad");
    // const blueButton = $("#blueQuad");
    // const yellowButton = $("#yellowQuad");  

    let synth; 
    const setTone = (element) => {
        synth = new Tone.Synth().toDestination()
    }

    setTone();

    $(startButton).click(function() {
        alert("\nTEST YOUR SHORT TERM MEMORY: \n\n1) Watch the colours flash in sequence below. \n2) Use your observation skills to memorise the order. \n3) Simply click what you see...it's as easy as that! \n\nGet ready for your first CLICK...");
        computerFULLMovesArray = [];
        computerMovesArray = [];
        playerMovesArray = [];
        round = 0;
        for (i = 0; i < numberOfRounds; i++) {
            computerFULLMovesArray.push((Math.floor(Math.random()*4)));
        };
        console.log(computerFULLMovesArray);
        // computerMovesArray = computerFULLMovesArray.slice(0,1);
        // console.log(computerMovesArray);
        setTimeout(() => {
            flash($(".box").eq(computerMovesArray[0]));
            if (computerMovesArray[0] === 0) {
                synth.triggerAttackRelease('A3', '8n');
            } else if (computerMovesArray[0] === 1) {
                synth.triggerAttackRelease('D4', '8n');
            } else if (computerMovesArray[0] === 2) {
                synth.triggerAttackRelease('F#4', '8n');
            } else {
                synth.triggerAttackRelease('A4', '8n')
            }    
        }, 1500);    
    });

    const flash = (element) => {
        $(element).animate({opacity: 0.1}, 50, function() {
            setTimeout(() => {
                $(element).animate({opacity: 1.0})
            }, 200);
        });  
    }

    $(".box").click(function(event) {
        // console.log($(this).index(".box")); //this console.logs index
        let playerMove = $(this).index(".box");
        playerMovesArray.push(playerMove);
        // console.log(playerMovesArray); 
            if (playerMove === 0 ) {
                synth.triggerAttackRelease('A3', '8n');
            } else if (playerMove === 1) {
                synth.triggerAttackRelease('D4', '8n');
            } else if (playerMove === 2) {
                synth.triggerAttackRelease('F#4', '8n');
            } else {
                synth.triggerAttackRelease('A4', '8n');
            }
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
                if (move === 0 ) {
                    synth.triggerAttackRelease('A3', '8n');
                } else if (move === 1) {
                    synth.triggerAttackRelease('D4', '8n');
                } else if (move === 2) {
                    synth.triggerAttackRelease('F#4', '8n');
                } else {
                    synth.triggerAttackRelease('A4', '8n');
                }
            }, index*700 + 1200);
        })    
    }
if (navigator.requestMIDIAccess) {
    console.log("This brower supports WebMIDI - see smashing.magazine.com article");
} else {
    console.log("false");
}  

}; //const onload closing curly braces
$(onload);
