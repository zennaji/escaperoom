const question1 = document.querySelector('.question1');
const input1 = document.querySelector('.question1 input');
const ok1 = document.querySelector('.question1 button');
///////////
const question2 = document.querySelector('.question2');
const input2 = document.querySelector('.question2 input');
const ok2 = document.querySelector('.question2 button');
///////////////
const question3 = document.querySelector('.question3');
const input3 = document.querySelector('.question3 input');
const ok3 = document.querySelector('.question3 button');
////
const question4 = document.querySelector('.question4');

////
const light = document.querySelectorAll('.lamp-container img');
const key = document.querySelector('.lamp-container p');
/////

export function checkQuestion1(){
    if(input1.value.toLowerCase() === "sint nicolaas"){
        question1.classList.add("hidden");
        question2.classList.remove("hidden");
    }
}
export function checkQuestion2(){
    if(input2.value === "1843"){
        question2.classList.add("hidden");
        question3.classList.remove("hidden");
        light[1].classList.remove("hidden");
        key.style.opacity = "20";
    }
}
export function checkQuestion3(){
    if(input3.value === "Yg3x59bgf"){
        question3.classList.add("hidden");
        question4.classList.remove("hidden");

        return true;

    }else{
        return false;
    }
}




