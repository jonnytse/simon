const onload = () =>  {
console.log('hello');

let randomNum = (Math.floor(Math.random()*4));
console.log(randomNum);

playerMovesArray = [];
computerMovesArray = [];

// for (i = 0; i < 50; i++) {
//     return (Math.floor(Math.random()*4)+1);
//     computerMovesArray.push(randomNum);
//     console.log(computerMovesArray);
// }

const greenButton = $("#greenQuad");
const redButton = $("#redQuad");
const blueButton = $("#blueQuad");
const yellowButton = $("#yellowQuad");

console.log($(".box").index(greenButton));
console.log($(".box").index(redButton));
console.log($(".box").index(yellowButton));
console.log($(".box").index(blueButton));

$(".box").click(function() {
    // console.log($(this).index(".box")); //this console.logs index
    playerMovesArray.push($(".box").index(this));
    console.log(playerMovesArray);
})

}; //const onload closing curly braces
$(onload);