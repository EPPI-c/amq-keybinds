document.addEventListener('keydown', function(evt){
    if (evt.keyCode === 83 && evt.ctrlKey === true) {
        evt.preventDefault()
        quiz.skipClicked()
    }
})
