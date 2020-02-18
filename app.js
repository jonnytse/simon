const onload = () =>  {
console.log('hello');

clicked = true;

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

// $(".box").click(function() {
//    let yellowButtonColor = clicked? 'lightyellow' : 'yellow'
//    $(this).css('background-color', yellowButtonColor);
//    clicked = !clicked;
// });

$(".box").click(function() {
    if ($(this).index(".box") === 0) {
        let color = clicked? 'lightgreen' : 'green';
        $(this).css('background-color', color);
        clicked = !clicked;

    } else if ($(this).index(".box") === 1) {
        let color = clicked? 'pink' : 'red';
        $(this).css('background-color', color);
        clicked = !clicked;

    }  else if ($(this).index(".box") === 2) {
        let color = clicked? 'lightyellow' : 'yellow';
        $(this).css('background-color', color);
        clicked = !clicked;

    } else if ($(this).index(".box") === 3) {
        let color = clicked? 'lightblue' : 'blue';
        $(this).css('background-color', color);
        clicked = !clicked;
    } 
})




}; //const onload closing curly braces
$(onload);