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
const light = document.querySelectorAll('.lamp-container img');


/////
ok1.addEventListener('click', function(){
    if(input1.value === "Sint Nicolaas"){
        
        question1.classList.add("hidden");
        question2.classList.remove("hidden");
    }
    
})
//////

ok2.addEventListener('click', function(){
    if(input2.value === "1843"){
        
        question2.classList.add("hidden");
        question3.classList.remove("hidden");
        light[1].classList.remove("hidden");
    }
})
