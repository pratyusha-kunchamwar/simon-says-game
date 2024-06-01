let gameseq = [];
let userseq = [];
let maxval=[];
let btnnum = ["f", "s", "t", "fo"];
let start = false;
let level = 0;
let maxscore=0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("game was started");
        start = true;
        levelup();
    }
});
function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);

}
function userflash(btn) {
    btn.classList.add("usflash");
    setTimeout(function () {
        btn.classList.remove("usflash");
    }, 200);
}

function levelup() {
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let ranidx = Math.floor(Math.random() * 3);
    let rcolor = btnnum[ranidx];
    let rabtn = document.querySelector(`.${rcolor}`);
    // console.log(ranidx);
    // console.log(bcolor);
    // console.log(rabtn);
    gameseq.push(rcolor);
    console.log(gameseq);
    btnflash(rabtn);

}
function cheakAns(ind) {
  
    if (userseq[ind] === gameseq[ind]) {

        if (userseq.length == gameseq.length) {
            setTimeout(levelup,1000);
        }
    }
    else {
        maxval.push(level);
       maxscore=Math.max(...maxval);
       console.log(maxscore);
        h2.innerHTML = `Game over....!Your score was <b>${level}</b> and Maximum Score.<b>${maxscore}</b> <br>
        Plese press any key on keyboard to start the game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },1000)
        reset();
    }

}


function btnpress() {
    let btn = this;
    userflash(btn);

    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    cheakAns(userseq.length-1);
}
let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
    btn.addEventListener("click", btnpress);
}
function reset(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;

}
