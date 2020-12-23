$(document).ready(function() {

    setInterval(function() {
        let now = new Date();
        let now_d = 31 - now.getDate();
        let now_h = 23 - now.getHours();
        let now_m = 59 - now.getMinutes();
        let now_s = 59 - now.getSeconds();

        $('#d').html(now_d + " д. ");
        $('#h').html((now_h < 10 ? '0' : '') + now_h + " : "); // используем сокращенную запись "if"
        $('#m').html((now_m < 10 ? '0' : '') + now_m + " : ");
        $('#s').html((now_s < 10 ? '0' : '') + now_s);
    }, 1000);

});