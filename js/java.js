function checkAnswer(inputId, correctAnswer) {
    const userInput = document.getElementById(inputId).value.toLowerCase();
    const inputElement = document.getElementById(inputId);

    if (userInput === correctAnswer.toLowerCase()) {
        inputElement.classList.add('correct-answer');
    } else {
        inputElement.classList.add('incorrect-answer');
        setTimeout(() => {
            inputElement.classList.remove('incorrect-answer');
            inputElement.value = ''; 
        }, 2000); 
    }
}
  
     
     