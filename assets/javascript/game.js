$('document').ready(function () {
    //$(document).ready(function () {//is there a difference?
    var randomNum = Math.floor(Math.random() * 101 + 19);

    var diamondRandomNum = Math.floor(Math.random() * 11 + 1);
    var RubyRandomNum = Math.floor(Math.random() * 11 + 1);
    var JadeRandomNum = Math.floor(Math.random() * 11 + 1);
    var EmeraldRandomNum = Math.floor(Math.random() * 11 + 1);

    var wins = 0;
    $('#wins').text(wins)
    var losses = 0;
    $('#losses').text(losses)
    var target = randomNum;
    $('#target').text(target)
    var total = 0;
    $('#total').text(total)



    $(document).on('click', '.button', function () { //event listener for dynamicly created elements
        // $('button').on('click', function () { //event listener for button clicks
        console.log($(this))
        var valueToAdd = $(this).attr('data');
        total += parseInt(valueToAdd)
        $('#total').text(total)
        //console.log(total)
        if (total === target) {
            alert('You win');

        } else if (total > target) {
            alert('You lost');

        } else {
            console.log('you are playing the game')
        }
    })

    var crystalArr = [diamondRandomNum, RubyRandomNum, JadeRandomNum, EmeraldRandomNum];
    console.log(crystalArr)
    crystalArr.forEach(element => {
        $('body').append(`<button class='button' data='${element}'>`) //template literals (use `)
    })
})