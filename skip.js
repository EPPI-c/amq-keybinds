var answerInput = document.getElementById("qpAnswerInput")
var chatInput = document.getElementById("gcInput")
document.addEventListener('keydown', function(evt){
    if (evt.keyCode === 83 && evt.ctrlKey === true) {
        evt.preventDefault()
        quiz.skipClicked()
    }
    if (evt.keyCode === 70 && evt.ctrlKey === true) {
	evt.preventDefault()
	if (document.activeElement == answerInput) {
	    chatInput.focus()
	}
	else {
	    answerInput.focus()
	}
    }
})
