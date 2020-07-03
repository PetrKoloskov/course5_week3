$(document).ready(function () {
    var cnt=0;
    var tmpList=[];
    var first, second;
    $(".top").click(function () {
        cnt++;
        //console.log($(this),first);
        if($(this).hasClass('rotated_180')) {
            cnt--;
            return;
        }
        $(this).addClass("rotated_180");

        //console.log($(this).children().data('animal'));
        if (cnt==1){
            first=$(this);
            //console.log($(this).children().data('animal'));
        }
        else {
            if (cnt == 2) {

                second = $(this);
                //console.log($(this).children().data('animal'));

                if (first.children().data('animal') == second.children().data('animal')) {
                    //console.log('yep');
                    first.children().removeClass('lose');
                    second.children().removeClass('lose');
                    first.children().addClass('win');
                    second.children().addClass('win');
                    cnt=0;

                } else {
                    //console.log('no');
                    first.children().addClass('lose');
                    second.children().addClass('lose');

                }

            }
            else{
                if(cnt==3){
                    first.removeClass('rotated_180');
                    second.removeClass('rotated_180');
                    first.children().removeClass('lose');
                    second.children().removeClass('lose');

                    first=$(this);
                    cnt=1;
                }
            }
        }


    })
})