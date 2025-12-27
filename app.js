let buttons = document.querySelectorAll(".box");
let yourscore = document.querySelector(".your");
let compscore = document.querySelector(".comp");
let reset = document.querySelector("#reset");
let msgcont = document.querySelector(".msgcont");
let scoreyou = 0;
let scorecomp = 0;
const youwin = () => {
    scoreyou ++;
    yourscore.innerText = scoreyou;
}
const compwin = () => {
    scorecomp ++;
    compscore.innerText = scorecomp;
}
const gencompchioce = () => {
    const arr = ["stone", "paper", "scissor"];
    let chioce = Math.floor(Math.random()*3);
    return arr[chioce];
}
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let currval = btn.name;
        let comp = gencompchioce();
        if(comp == "stone"){
            if(currval == "paper"){
                youwin();
            } else if (currval == "scissors") {
                compwin();
            }
        } else if(comp == "paper"){
            if(currval == "scissors"){
                youwin();
            } else if (currval == "stone") {
                compwin();
            }
        } else {
            if(currval == "stone"){
                youwin();
            } else if (currval == "paper") {
                compwin();
            }
        }
        if(scoreyou > scorecomp){
            msgcont.classList.remove("hide");
        } else {
        }
    })
})
reset.addEventListener("click", () => {
    comp = 0;
    scoreyou = 0;
    scorecomp = 0;
    yourscore.innerText = scoreyou;
    compscore.innerText = scorecomp;
    msgcont.classList.add("hide");
})