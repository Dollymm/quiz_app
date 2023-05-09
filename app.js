const questions=[
    {
        question:"Which is largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
            
        ]
    },
    {
        question:"Which is samllest bird in the world?",
        answers:[
            {text:"Crow",correct:false},
            {text:"peacock",correct:false},
            {text:"hummingbird",correct:true},
            {text:"mellisuga",correct:false},
        ]
    },
    {
        question:"Which is largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"Which is samlles continent in the world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Affrica",correct:false},
        ]
    }
];
const questionElement=document.getElementById("question");
const answerElement=document.getElementById("answer-buttons");
const nextElement=document.getElementById("next-buttons");
let currentQuestion=0;
let Score=0;
function startQuiz(){
    currentQuestion=0;
    Score=0;
    nextButton.innerHtml = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=question[currentQuestion];
    let questionNo =currentQuestion + 1;
    questionElement.innerHTML =questionNo + ". " +currentQuestion.
    question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click",selectAnswer)
        
    });
}
function resetState(){
    nextButton.style.display="none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}
function selectAnswer(e){
    const selectBtn =e.target;
    const isCorrect = selectBtn.dataset.correct==="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        Score++;

    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");

        }
        button.disabled =true;
    });
    nextButton.style.display="block"
}

function showQuestion(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${question.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<question.length){
        showQuestion();
    }else{
        showScore();
    }
};
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < question.length){
      handleNextButton();  
    }else{
        startQuiz()
    }
})

startQuiz();