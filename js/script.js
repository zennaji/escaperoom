import {updateTimer, getTimer} from './timer.js';
import {checkQuestionAnswer} from './questionPuzzle.js';
import {checkPinAnswer} from './numbersPuzzle.js';
<<<<<<< HEAD
import {containerAnime, animetQuestionImg, animetNumImg} from './animation.js';
=======
import {containerAnime} from './animation.js';
 
>>>>>>> 77fe1c4167fa66c641031a1318aef36dc3f564f7

const intro = document.querySelector("#intro");
const puzzels = document.querySelectorAll("#puzzel");
const afsluiting = document.querySelector("#afsluiting");
const startBtn = document.querySelector("#start-btn");
const nextBtns = document.querySelectorAll("#next-btn");
const timer = document.querySelector(".timer");

containerAnime();

startBtn.addEventListener('click', function(){
    
    getNext(intro, puzzels[0]);
    getTimer();
    setInterval(updateTimer, 1000);
    animetQuestionImg();

})
nextBtns[0].addEventListener('click', function(){

    console.log(checkQuestionAnswer());
    if(checkQuestionAnswer() === true){
        getNext(puzzels[0], puzzels[1] );
    }

})
nextBtns[1].addEventListener('click', function(){

    getNext(puzzels[1], puzzels[2] );
    console.log("Hallllo");
    animetNumImg();
    
})
nextBtns[2].addEventListener('click', function(){

    if(checkPinAnswer() === true){
        getNext(puzzels[2], afsluiting );
    }else{
        console.log('nee');
    }
})



function getNext(hide , show){
    hide.classList.add("hidden");
    hide.classList.remove("block");
    show.classList.add("block");
    show.classList.remove("hidden");
}






