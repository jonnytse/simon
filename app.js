const onload = () =>  {
console.log('hello');

playerMovesArray = [];
computerMovesArray = [];

const greenButton = $("#greenQuad");
const redButton = $("#redQuad");
const blueButton = $("#blueQuad");
const yellowButton = $("#yellowQuad");

console.log($("div").index(greenButton));
console.log($("div").index(redButton));
console.log($("div").index(yellowButton));
console.log($("div").index(blueButton));



$(".box").click(function() {
    $(this).index(".box");
    console.log(this);
})

}; //const onload closing curly braces
$(onload);