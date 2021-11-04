const numInput = document.querySelectorAll("#num-input");

let answer = [];

export function checkPinAnswer(){
    for(let i = 0; i < 4; i++){

        answer.push(numInput[i].value);
    }
    console.log(answer);

    if(answer.includes("2") && answer.includes("3") && answer.includes("7") && answer.includes("9") ){
        
        return true;
    }else{
        answer = [];
        return false;
    }
}






