import * as key from "./keyobject.js";

var keyS = key.makeKeyObject('KeyS', true);
var keyF = key.makeKeyObject('KeyF', true);

var answerInput = document.getElementById("qpAnswerInput")
var chatInput = document.getElementById("gcInput")
document.addEventListener('keydown', function(evt) {
    if (key.inKeys(evt, [keyS])) {
        evt.preventDefault()
        quiz.skipClicked()
    }
    if (key.inKeys(evt, [keyF])) {
        evt.preventDefault()
        if (answerInput.disabled) {
            chatInput.focus()
        }
        else {
            if (document.activeElement == answerInput) {
                chatInput.focus()
            }
            else {
                answerInput.focus()
            }
        }
    }
})
