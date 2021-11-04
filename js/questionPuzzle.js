const questionInput = document.querySelector(".question-input");

const correctAnswer = "wonderful time of the year";

export function checkQuestionAnswer(){
    if( questionInput.value.toLowerCase() === correctAnswer.toLowerCase() ){
        return true;
    }else{
        return false;
    }
    
}




