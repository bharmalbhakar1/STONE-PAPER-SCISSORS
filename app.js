let buttons = document.querySelectorAll(".box");
let yourscore = document.querySelector(".your");
let compscore = document.querySelector(".comp");
let reset = document.querySelector("#reset");
let msgcont = document.querySelector(".msgcont");
let comp = 0;
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
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let currval = btn.name;
        if(comp == 0){
            if(currval == "paper"){
                youwin();
            } else if (currval == "scissors") {
                compwin();
            }
            comp = 1;
        } else if(comp == 1){
            if(currval == "scissors"){
                youwin();
            } else if (currval == "stone") {
                compwin();
            }
            comp = 2;
        } else {
            if(currval == "stone"){
                youwin();
            } else if (currval == "paper") {
                compwin();
            }
            comp = 0;
        }
        if(scoreyou > scorecomp){
            msgcont.classList.remove("hide");
        } else {
            msgcont.classList.add("hide");
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