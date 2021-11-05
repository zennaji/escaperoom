import { updateTimer, getTimer } from './timer.js';
import { checkQuestionAnswer } from './questionPuzzle.js';
import { checkPinAnswer } from './numbersPuzzle.js';
import { checkQuestion1, checkQuestion2, checkQuestion3 } from './lamp.js';
import { containerAnime, animetQuestionImg, animetNumImg } from './animation.js';

const intro = document.querySelector("#intro");
const puzzels = document.querySelectorAll("#puzzel");
const afsluiting = document.querySelector("#afsluiting");
const startBtn = document.querySelector("#start-btn");
const nextBtns = document.querySelectorAll("#next-btn");
const timer = document.querySelector(".timer");



const ok1 = document.querySelector('.question1 button');
const ok2 = document.querySelector('.question2 button');
const ok3 = document.querySelector('.question3 button');

const goodResult = document.querySelector(".good-result");
const badResult = document.querySelector(".bad-result");

ok1.addEventListener('click', checkQuestion1);
ok2.addEventListener('click', checkQuestion2);
ok3.addEventListener('click', checkQuestion3);

let timerId;

containerAnime();

startBtn.addEventListener('click', function () {
    getNext(intro, puzzels[0]);

    getTimer();
    timerId = setInterval(updateTimer, 1000);
    animetQuestionImg();

    //
    
    setInterval(function () {
        if (updateTimer() === false) {
            for (let i = 0; i < puzzels.length; i++) {
                getNext(puzzels[i], afsluiting);

                getNext(goodResult, badResult);

            }

        }
    }, 10000)

})
nextBtns[0].addEventListener('click', function () {

    if (checkQuestionAnswer() === true) {
        getNext(puzzels[0], puzzels[1]);
    }
})
nextBtns[1].addEventListener('click', function () {

    if (checkQuestion3() === true) {
        getNext(puzzels[1], puzzels[2]);

        animetNumImg();
    }
})

nextBtns[2].addEventListener('click', function () {

    if (checkPinAnswer() === true) {
        getNext(puzzels[2], afsluiting);

        clearInterval(timerId);

    }

})




function getNext(hide, show) {
    hide.classList.add("hidden");
    hide.classList.remove("block");
    show.classList.add("block");
    show.classList.remove("hidden");
}

