var obstacle = document.getElementById("obstacle");
var entrance = document.getElementById("entrance");
var char = document.getElementById("char");
var jumping = 0;
var scorekeep = 0;


entrance.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    entrance.style.top = random + "px";
    scorekeep++;
});

setInterval(function(){
    var charTop =
    parseInt(window.getComputedStyle(char).getPropertyValue("top"));
    if(jumping == 0){
        char.style.top = (charTop+3)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(entrance).getPropertyValue("top"));
    var cTop = -(500-charTop);
    if((charTop>480) || ((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("Game over. Your score is " +(scorekeep-1));
        char.style.top = 100+"px";
        scorekeep = 0;
    }
},10);

function jump(){
    jumping = 1;
    let jumpcount = 0;
    var jumpinterval = setInterval(function(){
        var charTop =
        parseInt(window.getComputedStyle(char).getPropertyValue("top"))
        if ((charTop>6)&&(jumpcount < 15)){
            char.style.top = (charTop-5)+"px";
        }
        if (jumpcount > 20){
            clearInterval(jumpinterval);
            jumping = 0;
            jumpcount = 0;
        }
        jumpcount++;
    },10);
}