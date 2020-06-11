




$(document).ready(function(){
    GetCount();




           

    width = $(window).width();




});

// дата окончания акции
var year = 2222;
var month = 4;
var day = 4;
var hour = 0;
var min = 0;
var sec = 0;

dateFuture = new Date(year, month-1, day, hour, min, sec);
function GetCount() {
    dateNow = new Date();
    amount = dateFuture.getTime() - dateNow.getTime() + 5;
    delete dateNow;
    if (amount < 0) {
        out = "<div class='days'>0</div>" + "<div class='hours'>0</div>" + "<div class='mins'>0</div>" + "<div class='secs'>0</div>";
        document.getElementById('timer').innerHTML = out;
    } else {
        days = 0;
        hours = 0;
        mins = 0;
        secs = 0;
        out = "";
        amount = Math.floor(amount / 1000);
        days = Math.floor(amount / 86400);
        amount = amount % 86400;
        hours = Math.floor(amount / 3600);
        amount = amount % 3600;
        mins = Math.floor(amount / 60);
        amount = amount % 60;
        secs = Math.floor(amount);
        out = "<div class='days'>" + days + "</div>" + "<div class='hours'>" + hours + "</div>" + "<div class='mins'>" + mins + "</div>" + "<div class='secs'>" + secs + "</div>";
        if(days < 10) days = '0'+days;
        if(hours < 10) hours = '0'+hours;
        if(mins < 10) mins = '0'+mins;
        if(secs < 10) secs = '0'+secs;
        out = "<div>" +hours+ "</div>" + "<p class='dots'>:</p>" + "<div>" + mins + "</div>" + "<p class='dots'>:</p>"  + "<div>" + secs + "</div>";
        document.getElementById('timer').innerHTML = out; 
        setTimeout("GetCount()", 1000);
    }
}


	
	
$(window).load(function(){
	$('.flexslider').flexslider({
		animation: "slide",
		start: function(slider){
			$('body').removeClass('loading');
		}
	});
	$('.revslider').flexslider({
		animation: "slide",
		start: function(slider){
			$('body').removeClass('loading');
		}
	});










});