$(function () {

    function getUserName() {
        let userName = $('#userNameInput').val()
        if (!userName) {
            userName = 'Stranger'
        }
        return userName
    }

    function generateRandomNumber(max) {
        return Math.floor(Math.random() * max)
    }

    function getMaxFromUser() {
        let max = parseInt($('#maxInput').val())
        if (max === 0) {
            $('#messageBoard').html(`<h3> Zero? Really? Bye!</h3>`)
            $('#maxForm').css('display', 'none')
        } else if (!max) {
            $('#messageBoard').html(`<h3> Are you a slowpoke?<br>Get Moving buddy!</h3>`)
        }
        else if (max < 0) {
            $('#messageBoard').html(`<h3> Be Positive!</h3>`)
        } else {
            $('#messageBoard').html(`<h3>Ok I've chosen my number Now It's your turn to Guess it!</h3>`)
            $('#maxForm').css('display', 'none')
            $('#guessForm').css('display', 'block')
        }
        return max
    }

    function startGame() {
        let max = getMaxFromUser()
        let answer = generateRandomNumber(max)

        $('#guessBtn').click(function (e) {
            e.preventDefault()
            let userGuess = parseInt($('#guessInput').val())
            if (!$('#guessInput').val()) {
                $('#messageBoard').html(`<h3>Is that the best you've got?!</h3>`)
            } else {
                if (userGuess < answer) {
                    $('#messageBoard').html(`<h3>${userGuess} is too low!</h3>`)
                } else if (userGuess > answer) {
                    $('#messageBoard').html(`<h3>${userGuess} is too high!</h3>`)
                } else {
                    $('#messageBoard').html(`<h3>Correct! ${userGuess} is the NUMBER!</h3>`)
                    $('#guessForm').css('display', 'none')
                    $('#tryAgainForm').css('display', 'block')
                }
                $('#guessForm')[0].reset()
            }
        })
    }


    $('#userNameBtn').click(function (e) {
        e.preventDefault()
        let userName = getUserName()
        $('#messageBoard').html(`<h3>Hi ${userName}! I'm going to choose a number from 0 to whatever you like. What would you pick?</h3>`)
        $('#userNameForm').css('display', 'none')
        $('#maxForm').css('display', 'block')
    })
    

    $('#maxBtn').click(function (e) {
        e.preventDefault()
        startGame()
    })

})