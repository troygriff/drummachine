document.addEventListener("keypress", checkkey);

var arr = [false, false, false, false, false, false, false, false];
var arr2 = [false, false, false, false, false, false, false, false];
var arr3 = [false, false, false, false, false, false, false, false];

var total = 8;
var total2 = 8;
var total3 = 8;

var count = 1;
var count2 = 1;
var count3 = 1;

var flag = 0;
var flag2 = 0;
var flag3 = 0;

var isGreen = false;
var isGreen2 = false;
var isGreen3 = false;

var timerId = 0;
var actualTempo = 120;
var displayTempo = 120;

var play = false;


function checkkey(e) {
    if (e.keyCode == 13 || e.keyCode == 32) {
        if (!play) {
            start();
        } else if (play) {
            pause();
        }
    }
}

var random = Math.floor((Math.random() * 6) + 1);
$('body').removeClass("back1").addClass("back" + random);


blank();





function blank() {
    for (var i = 0; i < 24; i++) {
        $('.' + i).css('background', 'LightGray').css('opacity', '.9');
    }
}

function start() {
    play = true;
    $('.' + 'playbtn').css('background-color', 'lightgreen').css('color', '#fff').css('border-width', '0px');
    $('.' + 'pausebtn').css('background-color', '#fff').css('border-width', '1px');
    clearInterval(timerId);
    run(actualTempo, 0);
}

function reset() {
    play = false;
    stop();
    clearInterval(timerId);
    $('.' + 'playbtn').css('background-color', '#fff').css('color', '#333').css('border-width', '1px');
    $('.' + 'pausebtn').css('background-color', '#fff').css('border-width', '1px');
    arr = [false, false, false, false, false, false, false, false];
    arr2 = [false, false, false, false, false, false, false, false];
    arr3 = [false, false, false, false, false, false, false, false];
    blank();
}

function pause() {
    play = false;
    $('.' + 'playbtn').css('background-color', '#fff').css('color', '#333').css('border-width', '1px');
    $('.' + 'pausebtn').css('background-color', 'rgb(255,255,153)').css('border-width', '0px');
    clearInterval(timerId);
    //blank();
}

function stop() {
    play = false;
    $('.' + 'playbtn').css('background-color', '#fff').css('color', '#333').css('border-width', '1px');
    $('.' + 'pausebtn').css('background-color', '#fff').css('border-width', '1px');

    clearInterval(timerId);

    flag = 0;
    flag2 = 0;
    flag3 = 0;

    for (var i = 0; i < 24; i++) {
        console.log($('.' + i).css('background'));
        if ($('.' + i).css('background-color') == 'rgb(144, 238, 144)') {
            console.log("FOUND");
            $('.' + i).css('background', 'LightGray').css('opacity', '.9');
        }
    }
}

function changeTempo(val) {
    displayTempo = displayTempo + val;
    actualTempo = actualTempo + (val * -1);
    $(".tempo").attr("value", displayTempo);
    clearInterval(timerId);
    run(actualTempo, 0);
}


$('.work').click(function() {
    var d = $(this).attr('class').split(' ')[0];
    if (d < 8) {
        arr[d] = !arr[d];
        if ($('.' + d).css('background-color') == 'rgb(211, 211, 211)') {
            $('.' + d).css('background', 'rgb(100, 181, 246)');
            new Audio('sounds/hat.wav').play();
        } else if ($('.' + d).css('background-color') == 'rgb(100, 181, 246)') {
            $('.' + d).css('background', 'LightGray').css('opacity', '.9');
        }

    } else if (d >= 8 && d < 16) {
        arr2[d - 8] = !arr2[d - 8];
        if ($('.' + d).css('background-color') == 'rgb(211, 211, 211)') {
            $('.' + d).css('background', '#64B5F6');
            new Audio('sounds/snare.wav').play();
        } else if ($('.' + d).css('background-color') == 'rgb(100, 181, 246)') {
            $('.' + d).css('background', 'LightGray').css('opacity', '.9');
        }


    } else {
        arr3[d - 16] = !arr3[d - 16];
        if ($('.' + d).css('background-color') == 'rgb(211, 211, 211)') {
            $('.' + d).css('background', '#64B5F6');
            new Audio('sounds/kick.wav').play();
        } else if ($('.' + d).css('background-color') == 'rgb(100, 181, 246)') {
            $('.' + d).css('background', 'LightGray').css('opacity', '.9');
        }
    }
});

function run(actualTempo, position) {
    timerId = setInterval(function() {
        console.log("tempo = " + actualTempo);
        for (var i = 0; i < 8; i++) {
            if (flag == i) {
                $('.' + flag).css('background', 'LightGreen');
            } else {
                if (arr[i] == false) {
                    $('.' + i).css('background', 'LightGray').css('opacity', '.9');
                }
            }
            if (arr[i] == true) {
                $('.' + i).css('background', '#64B5F6');
            }
            if (arr[i] == true && flag == i) {
                new Audio('sounds/hat.wav').play();
            }
        }

        for (var i = 0; i < 8; i++) {
            if (flag2 == i) {
                $('.' + (flag2 + 8)).css('background', 'LightGreen');
            } else {
                if (arr2[i] == false) {
                    $('.' + (i + 8)).css('background', 'LightGray').css('opacity', '.9');
                }
            }
            if (arr2[i] == true) {
                $('.' + (i + 8)).css('background', '#64B5F6');
            }
            if (arr2[i] == true && flag2 == i) {
                new Audio('sounds/snare.wav').play();
            }
        }

        for (var i = 0; i < 8; i++) {
            if (flag3 == i) {
                $('.' + (flag3 + 16)).css('background', 'LightGreen');
            } else {
                if (arr3[i] == false) {
                    $('.' + (i + 16)).css('background', 'LightGray').css('opacity', '.9');
                }
            }
            if (arr3[i] == true) {
                $('.' + (i + 16)).css('background', '#64B5F6');
            }
            if (arr3[i] == true && flag3 == i) {
                new Audio('sounds/kick.wav').play();
            }
        }

        //changes the div that turns green
        flag++;
        if (flag > 7) {
            flag = 0;
        }
        flag2++;
        if (flag2 > 7) {
            flag2 = 0;
        }
        flag3++;
        if (flag3 > 7) {
            flag3 = 0;
        }
    }, actualTempo);
}
