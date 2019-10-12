$(document).ready(function () {

    var randomNum = Math.floor(Math.random() * 100) + 20;

    var diamondRandomNum = Math.floor(Math.random() * 11) + 1;
    var RubyRandomNum = Math.floor(Math.random() * 11) + 1;
    var JadeRandomNum = Math.floor(Math.random() * 11) + 1;
    var EmeraldRandomNum = Math.floor(Math.random() * 11) + 1;

    var wins = 0;
    $('#wins').text(wins)
    var losses = 0;
    $('#losses').text(losses)
    var target = randomNum;
    $('#target').text(target)
    var total = 0;
    $('#total').text(total)

    function reset() {
        diamondRandomNum = Math.floor(Math.random() * 11) + 1;
        RubyRandomNum = Math.floor(Math.random() * 11) + 1;
        JadeRandomNum = Math.floor(Math.random() * 11) + 1;
        EmeraldRandomNum = Math.floor(Math.random() * 11) + 1;

        randomNum = Math.floor(Math.random() * 100) + 20;
        $('#target').text(randomNum)
        totalScore = 0;
        $('#total').text(total);


    }

    function youWin() {
        wins++;
        $('#wins').text(wins)
        reset();
    }

    function youLose() {
        losses++;
        $('#losses').text(losses)
        reset();
    }
    // ================================

    $('#diamond').on('click', function () {
        total += diamondRandomNum;
        console.log(total)
        $('#total').text(total);
        if (total === randomNum) {
            youWin();
            reset();
        } else if (total > randomNum) {
            youLose();
            reset();
        }
    });
    $('#Ruby').on('click', function () {
        total += RubyRandomNum;
        console.log(total)
        $('#total').text(total);
        if (total === randomNum) {
            youWin();
            reset();
        } else if (total > randomNum) {
            youLose();
            reset();
        }
    });
    $('#Jade').on('click', function () {
        total += JadeRandomNum;
        console.log(total)
        $('#total').text(total);
        if (total === randomNum) {
            youWin();
            reset();
        } else if (total > randomNum) {
            youLose();
            reset();
        }
    });
    $('#Emerald').on('click', function () {
        total += EmeraldRandomNum;
        console.log(total)
        $('#total').text(total);
        if (total === randomNum) {
            youWin();
            reset();
        } else if (total > randomNum) {
            youLose();
            reset();
        }
    });




    // var crystalArr = [diamondRandomNum, RubyRandomNum, JadeRandomNum, EmeraldRandomNum];
    // var crystalName = ["Diamond", "Ruby", "Jade", "Emerald"];
    // console.log(crystalArr)
    // crystalArr.forEach((element, e2) => {
    //     if (e2 === 0) {
    //         $(`body`).append(`<button class='button' data=${element}>Diamond</Button>`)
    //     } else {
    //         $(`body`).append(`<button class='button' data=${element}>Ruby</Button>`)
    //     }


    // })


});