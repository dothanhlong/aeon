$(function(){
	
	$(window).on('load',function(){
		$('.plancheckArea').show();
	});
	
	var answer1 = 0;
	var answer2 = 0;
	var answer3 = 0;
	var answer4 = 0;
	var answerTotal = 0.0;
	
	var q1 = [0.14 , 0.7 , 1.4 , 4.2];
	var q2 = [0.26 , 1.05 , 2.1 , 3.15];
	var q3 = [0 ,3.6 , 7.2 , 14.4 , 28.8 , 36];
	var q4 = [12 , 0];
	
	var totalPlanText = "GB/月プラン";
	var plan = "GB/月プラン";
	var yourPlan = [0.5 , 1 , 2 , 4 , 6 , 8 , 12 , 20 , 30 , 40 , 50];
	
	var winMode;
	
	$('.step1 .select input').click(function(){
		$('.step1 .select li').removeClass('on');
		$(this).parent().parent().addClass('on');
		
		var thisNum = $(this).val();
		thisNum = thisNum.slice(-1);
		thisNum = q1[thisNum - 1];
		answer1 = thisNum;
		next();
	});
	
	$('.step2 .select input').click(function(){
		$('.step2 .select li').removeClass('on');
		$(this).parent().parent().addClass('on');
		
		var thisNum = $(this).val();
		thisNum = thisNum.slice(-1);
		thisNum = q2[thisNum - 1];
		answer2 = thisNum;
		next();
	});
	
	$('.step3 .select input').click(function(){
		$('.step3 .select li').removeClass('on');
		$(this).parent().parent().addClass('on');
		
		var thisNum = $(this).val();
		thisNum = thisNum.slice(-1);
		thisNum = q3[thisNum - 1];
		answer3 = thisNum;
		next();
	});
	
	$('.step4 .select input').click(function(){
		$('.step4 .select li').removeClass('on');
		$(this).parent().parent().addClass('on');
		
		var thisNum = $(this).val();
		thisNum = thisNum.slice(-1);
		thisNum = q4[thisNum - 1];
		answer4 = thisNum;
		next();
	});
	
	$('.plancheckArea .select li input').click(function(){
		checkTotal();
	});
	
	function checkTotal(){
		answerTotal = 0;
		answerTotal = answer1 + answer2 + answer3;
		answerTotal = answerTotal.toFixed(2);
		if(answer4 === 12 && answerTotal <= 12) {
			plan = yourPlan[6] + totalPlanText;
		}/*else if(answer4 !== 12 && answerTotal <= 12){
			plan = yourPlan[6] + totalPlanText;
		}*/
		else {	
			for( i = 0; i < yourPlan.length; i++) {
				if(yourPlan[i] > answerTotal){
					plan = yourPlan[i];
					plan = plan + totalPlanText;
					break;
				}
			}
		}
		$('.step5 .dataNum .num').text(answerTotal);
		$('.step5 .planNum .num').text(plan);
	}
	/*-------------------
		slide
	-------------------*/
	var nowSlide = 0;
	var slideMove = 0;
	var slideMargin = 9;
	var slideWrap = $('#content .plancheckArea .planCheckList');	
	var slideList = $('#content .plancheckArea .planCheckList > li');
	var slideWidth = "";
	var slideWidthWrap = "";
	var prevBtn = $('#content .plancheckArea .arrow .prev');
	var nextBtn = $('#content .plancheckArea .arrow .next');
	var status = $('#content .plancheckArea .status');
	var resizeMove = "";
	prevBtn.hide();
	nextBtn.hide();
	status.hide();
	$(window).on('load',function(){
		$('#content .plancheckArea .planCheckList').css('display','block');
	});
	
	$(window).on('load resize',function(){
				
		winSize();
		if(winMode === 'ds') {
			slideWidth = $('#content .plancheckArea').width();
			slideWidthWrap = slideWidth + slideMargin * 2;
		}else {
			slideWidth = $('#content .plancheckArea').width();
			var slideSpWidth = slideList.width();
			slideWidthWrap = slideSpWidth + slideMargin * 2;
		}
		
		
		resizeMove = (slideWidthWrap * nowSlide) * (- 1);
		slideWrap.css({
			'position': 'relative',
			'width': slideWidthWrap * (slideList.length),
			'left': resizeMove - slideMargin
		});
		
		slideMove = resizeMove;
		
		slideList.css({
			'margin': '0 ' + slideMargin + 'px',
			'width': slideWidth,
			'float': 'left'
		});

	});
	
	function btnShow() {
		if(nowSlide === 0){
			prevBtn.hide();
			nextBtn.hide();
		}else {
			prevBtn.show();
			nextBtn.show();
		}
		if(nowSlide === slideList.length - 1) {
			nextBtn.hide();
		}else if(nowSlide === 0){
			nextBtn.hide();
		}else {
			nextBtn.show();
		}
		if(nowSlide > 0 && nowSlide < slideList.length - 1){
			status.show();
		}else {
			status.hide();
		}
	}

	function prev(){
		nowSlide--;
		slideWrap.animate({
			'left': slideMove + (slideWidthWrap - slideMargin)
		});
		slideMove += slideWidthWrap;
		btnShow();
		statusMode();
	}
	
	function next(){
		nowSlide++;
		slideWrap.animate({
			'left': slideMove + (slideWidthWrap + slideMargin) * -1
		});
		slideMove -= slideWidthWrap;
		btnShow();
		statusMode();
	}
	
	function statusMode() {
		if(nowSlide > 0 && nowSlide < slideList.length - 1){
			status.children('li').removeClass('current');
			status.children('li').eq(nowSlide - 1).addClass('current');
		}else {
			status.children('li').removeClass('current');
		}
	}
	
	prevBtn.click(function(){
		prev();
	});
	
	nextBtn.click(function(){
		next();
	});
	
	$('#content .plancheckArea .planCheckList .step0 .btn').click(function(){
		if($(this).parents().hasClass('stepOff')){
			return false;
		}else {
			var thisUrl = location.href;
			thisUrl = thisUrl.split('/');
			if(thisUrl[3] === 'plan'){
				thisUrl = 'price';
			}
			ga('send', 'event', 'button', thisUrl[3], 'traffic_start');
			next();
		}
	});
	
	function resetCheck() {
		slideWrap.animate({
			'left': 0
		});
		
		answer1 = 0;
		answer2 = 0;
		answer3 = 0;
		answer4 = 0;
		answerTotal = 0.0;
		
		nowSlide = 0;
		slideMove = 0;
		
		$('#content .plancheckArea .planCheckList > li .select li').removeClass('on');
		$('#content .plancheckArea .planCheckList .select input').attr("checked",false);
		checkTotal();
		btnShow();
	}

	$('#content .plancheckArea .planCheckList .step5 .btn a').click(function(){
		resetCheck();
		return false;
	});

	function winSize(){
    	var winSize1 = $('.winSize').css('display');
    	if(winSize1 === 'none'){
		    winMode = 'ds';
	    }else {
		    winMode = 'sp';
	    }
	}

});