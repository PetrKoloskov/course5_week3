$(document).ready(function () {
var timerDefault=60;
        $('.top').click(function() {
        var timer=$('.timer').children().text(),int;
        int = setInterval(function() {
            if (timer > 0) {
                var isWin=0;
                $('.top').each(function (index,element) {
                    isWin+=$(element).hasClass('rotated_180');
                })
                if  (isWin==12) {
                    clearInterval(int);
                    showModal('#Modal','Winner','Play Again');
                    $('.try_again').click(function () {
                        setDefault('#Modal');
                    })
                }
                timer--;
                $('.timer').children().text(timer);
            } else {
                clearInterval(int);
                showModal('#Modal', 'Loser', 'Try again');
                $('.try_again').click(function () {
                    setDefault('#Modal');

                });
            }
        }, 1000);

    });
    function showModal(id, result, buttonValue){
        $('.result').children(id).removeClass('Modal_none');
        $('.try_again').val(buttonValue);
        $('.Modal_text').text(result);
        $('.result').children(id).addClass('Modal_view');

        }

    function setDefault(id){
            $('.result').children(id).removeClass('Modal_view');
            $('.result').children(id).addClass('Modal_none');
            $('.top').children().removeClass('win');
            $('.top').children().removeClass('lose');
            $('.top').removeClass('rotated_180');
            $(".main .top").shuffle();
            timer=timerDefault;
            $('.timer').children().text(timer);
    }

})
