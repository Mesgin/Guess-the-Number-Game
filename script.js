$(function () {

    let tempNumber = Math.floor((Math.random() * 100))
    let userNumber

    $('.btn').click(function (event) {
        event.preventDefault()
        userNumber = $('#userNumber').val()
        $('form')[0].reset()
        startGame()
    })


    function startGame() {

        if (userNumber > tempNumber) {
            $('#messageBoard').html(`<h3> ${userNumber} is Too High!</h3>`)
        } else if (userNumber < tempNumber) {
            $('#messageBoard').html(`<h3> ${userNumber} is Too Low!</h3>`)
        } else {
            $('#messageBoard').html(`<h3> Correct! ${userNumber} is the NUMBER!</h3>`)
        }
    }

})