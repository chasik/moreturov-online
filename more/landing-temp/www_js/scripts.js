$(window).resize(function(){
	resizeMainWindow();
});


function GetW(){
	return $(window).innerWidth();
}

function GetH(){
	return $(window).innerHeight();
}


function resizeMainWindow(){
	var w = GetW();
	var h = GetH();

	if ((w / h) > 1.777777777) {
		$('#moreturovImg').css('backgroundSize', '100% auto');
	} else {
		$('#moreturovImg').css('backgroundSize', 'auto 100%');
	}
}