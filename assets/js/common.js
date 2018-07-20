$(function(){
	
	 if(navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)){
        $('head').prepend('<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0">');
	 }else if (navigator.userAgent.indexOf('iPad') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)){
		 $('head').prepend('<meta name="viewport" content="width=1100">');
	 }
	 
	
	/*--------------------------------
		
		rollOver
		
	--------------------------------*/
	$('a.over img').hover(function(){
		$(this).find('img').attr('src', $(this).find('img').attr('src').replace('_off', '_on'));
		}, function(){
		if (!$(this).hasClass('currentPage')) {
			$(this).find('img').attr('src', $(this).find('img').attr('src').replace('_on', '_off'));
		}
	});
	
	/*--------------------------------
		
		winSize
		
	--------------------------------*/
	var winMode;
  	$('body').append('<div class="winSize"></div>');
	function winSize(){
    	var winSize1 = $('.winSize').css('display');
    	if(winSize1 === 'none'){
		    winMode = 'ds';
	    }else {
		    winMode = 'sp';
	    }
	}
	
	/*--------------------------------
		
		pagetop
		
	--------------------------------*/
	function pageTop(){
		$('.pageTop a').click(function(){
			$('html,body').animate({scrollTop:0},'slow');
			return false;
		});
	}
	if($('.pageTop').size() > 0){
		pageTop();
	}
	
	/*--------------------------------
		
		tel link
		
	--------------------------------*/
	var ua = navigator.userAgent.toLowerCase();
	var isMobile = /iphone/.test(ua)||/android(.+)?mobile/.test(ua);

	if (!isMobile) {
    	$('a[href^="tel:"]').on('click', function(e) {
			e.preventDefault();
		});
	}
	
	/*--------------------------------
		
		mainVisual
		
	--------------------------------*/
	if($('.mainVisual ul').size() > 0){
		var slideFirstNum = 0;
		var visualParam = location.search;
		var slideAllNum = $('.mainVisual ul li').length - 1;
		
		visualParam = visualParam.match(/c=(.*?)(&|$)/);
		if(visualParam !== null){
			if(visualParam[1] <= slideAllNum){
				slideFirstNum = visualParam[1];
			}
		}
		
		$('.mainVisual ul').css({
			'visibility':'visible'
		});
		
		var mainSlideSettings = function(){
				var setting1 = {
					auto: false,/*true*/
					displaySlideQty: 1,
					startSlide: slideFirstNum,
					pause: 5000,
					pager: true,
					slideWidth: 1000,
					minSlides: 1,
					maxSlides: 2,
					moveSlides: 1,
					slideMargin: 0,
					useCSS:false
				};
				var setting2 = {
					auto: false,
					controls: false,
					startSlide: slideFirstNum,
					pause: 5000
				};
			return ($(window).width()>640) ? setting1 : setting2;
		};
		var mainSlider;
		
		function mainSlideChange() {
			mainSlider.reloadSlider(mainSlideSettings());
		}
		mainSlider = $('.mainVisual ul').bxSlider(mainSlideSettings());
		
		$(window).on('load resize',function(){
			mainSlideChange();
		});
	}
	
	/*--------------------------------
		
		 bnrSlide
		
	--------------------------------*/
	/*$(window).on('load resize',function(){
		var checkViewPort = true;
		if($(window).width()>640){
			if(checkViewPort){
				var slideNum = $('.bnrSlider ul li').length;
				if(slideNum % 3 === 1) {
					$('.bnrSlider ul').append('<li class="dummy"><img src="/img/bnrslider_bnr_dummy.gif" alt=""></li>');
					//$('.bnrSlider ul').append('<li class="dummy">a</li>');
					$('.bnrSlider ul').append('<li class="dummy"><img src="/img/bnrslider_bnr_dummy.gif" alt=""></li>');
				}
				if(slideNum % 3 === 2) {
					$('.bnrSlider ul').append('<li class="dummy"><img src="/img/bnrslider_bnr_dummy.gif" alt=""></li>');
				}
				checkViewPort = false;
			}
		}else {
			$('.bnrSlider ul li.dummy').remove();
			checkViewPort = false;
		}
	});

	if($('.bnrSlider ul').size() > 0){
		var bnrSlideSettings = function(){
				var setting1 = {
					auto: false,
					slideWidth: 292,
					minSlides: 3,
					maxSlides: 3,
					slideMargin: 24,
					controls: true,//false
					pager: true//false
				};
				var setting2 = {
					mode : 'horizontal',
					slideWidth: 146,
					minSlides: 2,
					maxSlides: 2,
					slideMargin: 6
				};
			return ($(window).width()>640) ? setting1 : setting2;
		};
		var bnrSlider;

		function bnrSlideChange() {
			bnrSlider.reloadSlider(bnrSlideSettings());
		}
		bnrSlider = $('.bnrSlider ul').bxSlider(bnrSlideSettings());

		$(window).on('load resize',function(){
			bnrSlideChange();
		});
	}*/
	
	/*--------------------------------
		
		 header fixed
		
	--------------------------------*/
	function fixedHeader(){

		winSize();
		var headerHeight = $('#header').outerHeight();
		$(window).on('scroll resize load',function(){
			var isUa = navigator.userAgent;
				if(winMode === 'ds'){
					var scrollPos = $(window).scrollTop();
					if(scrollPos > headerHeight){
						$('#header').addClass('fixed');
						$('#content').addClass('fixed');
					}else {
						$('#header').removeClass('fixed');
						$('#content').removeClass('fixed');
					}
				}else {
					$('#header').removeClass('fixed');
					$('#content').removeClass('fixed');
				}
		});
	
	}
	//ずっとfixedヘッダーを適用する場合
	if($('#header').size() > 0 && location.href.split("/")[3] !== "campaign" && location.href.split("/")[3] !== "type1-au"){
		fixedHeader();
	}
	//campaign/index.html用を追加
	if($('.campaignTopPage').size()>0){
		fixedHeader();
	}
	
	/*--------------------------------
		
		 header current
		
	--------------------------------*/
	function navCurrent(){
		var thisPage = location.href;
		thisPage = thisPage.split('/');
		thisPage = '/' + thisPage[3] + '/';
		$('#header #nav ul a').each(function(){
			var navHref = $(this).attr('href');
			if(thisPage.match(navHref)){
				$(this).addClass('current');
			}
		});
	}
	if($('#header').size() > 0){
		navCurrent();
	}
	
	
	/*--------------------------------
		
		 navAction
		
	--------------------------------*/
	function navAction(){
		$('.navAction .open').click(function(){
			$('#nav').show();
			$(this).hide();
			$(this).next('.close').show();
		});
		$('.navAction .close').click(function(){
			$('#nav').hide();
			$(this).hide();
			$(this).prev('.open').show();
		});
	}
	if($('.navAction').size() > 0){
		$(window).on('resize load' , function(){
			winSize();
			if(winMode === 'ds'){
				$('#nav').show().css('height','auto');
			}
			if(winMode === 'sp'){
				if($('.navAction .close').css('display') === 'none'){
					$('#nav').hide();
				}
				var contentHeight = $('body').outerHeight();
				$('#nav').css('height',contentHeight);
				navAction();
			}
		});
	}
	
	/*--------------------------------
		
		 bnrOpen
		
	--------------------------------*/
	function bnrOpen(){
		$('body.top .bnrVisual .allBnrBtn .open').click(function(){
			winSize();
			$('body.top .bnrVisual .allBnrBtn .open').hide();
			$('body.top .bnrVisual .allBnrBtn .close').show();
			$('body.top .bnrVisual .allBnr').show();
			if(winMode === 'sp'){
				$('body.top .bnrVisual .allBnrBtn').hide();
				$('body.top .bnrVisual .allBnr .innerAllBnrBtn').show();
			}
		});
		$('body.top .bnrVisual .allBnrBtn .close,body.top .bnrVisual .allBnr .innerAllBnrBtn .close').click(function(){
			winSize();
			$('body.top .bnrVisual .allBnrBtn .close').hide();
			$('body.top .bnrVisual .allBnrBtn .open').show();
			$('body.top .bnrVisual .allBnr').hide();
			$('body.top .bnrVisual .allBnr .innerAllBnrBtn').hide();
			if(winMode === 'sp'){
				$('body.top .bnrVisual .allBnr .innerAllBnrBtn').hide();
				$('body.top .bnrVisual .allBnrBtn').show();	
			}
		});
	}
	if($('body.top').size() > 0){
		
		var bnrNum = $('.bnrSlider > ul li').length;
	
		bnrOpen();
		//ボタンの位置がSPで違うための処理
		$(window).on('resize load' , function(){
			winSize();
			if(winMode === 'ds'){
				if($('body.top .bnrVisual .allBnr').css('display') === 'block'){
					$('body.top .bnrVisual .allBnrBtn').show();
					$('body.top .bnrVisual .allBnr .innerAllBnrBtn').hide();
				}
				if(bnrNum < 7){
					$('body.top .bnrVisual .allBnrBtn').hide();
				}else {
					$('body.top .bnrVisual .allBnrBtn').show();
				}
			}
			if(winMode === 'sp'){
				if($('body.top .bnrVisual .allBnr').css('display') === 'block'){
					$('body.top .bnrVisual .allBnrBtn').hide();
					$('body.top .bnrVisual .allBnr .innerAllBnrBtn').show();
				}
				if(bnrNum < 5){
					$('body.top .bnrVisual .allBnrBtn').hide();
				}else {
					$('body.top .bnrVisual .allBnrBtn').show();
				}
			}
		});
		
	}
	
	/*--------------------------------
		
		 autoHeight
		
	--------------------------------*/
	if($('.priceList .imgArea').size()>0){
		$(window).on('load resize',function(){
			winSize();
			if(winMode === 'ds'){
				$('.priceList .imgArea').autoHeight();
			}
			if(winMode === 'sp'){
				$('.priceList .imgArea').removeAttr('style');
			}
		}).trigger('resize');
	}
	if($('.listStyle01').size()>0){
		$(window).on('load resize',function(){
			winSize();
			if(winMode === 'ds'){
				$('.listStyle01 > ul> li').autoHeight();
			}
			if(winMode === 'sp'){
				$('.listStyle01 > ul> li').removeAttr('style');
			}
		}).trigger('resize');
	}
	if($('#content .productTop #tel > ul li').size()>0){
		$(window).on('load resize',function(){
			winSize();
			if(winMode === 'ds'){
				$('#content .productTop #tel > ul li').autoHeight();
			}
			if(winMode === 'sp'){
				$('#content .productTop #tel > ul li').removeAttr('style');
			}
		}).trigger('resize');
	}
	if($('#content .stepList li dl').size()>0){
		$(window).on('load resize',function(){
			winSize();
			if(winMode === 'ds'){
				$('#content #entryWeb .stepList li dl').autoHeight({column: 4, clear:1});
				$('#content #entryShop #sameDay .stepList li dl').autoHeight({column: 4, clear:1});
				$('#content #entryShop #mailing .stepList li dl').autoHeight({column: 4, clear:1});
			}
			if(winMode === 'sp'){
				$('#content .stepList li dl').removeAttr('style');
			}
		}).trigger('resize');
	}
	if($('#content .supportListNav li dl').size()>0){
		$(window).on('load resize',function(){
			winSize();
			if(winMode === 'ds'){
				$('#content .supportListNav li dl').autoHeight();
			}
			if(winMode === 'sp'){
				$('#content .supportListNav li dl').removeAttr('style');
			}
		}).trigger('resize');
	}
	if($('.priceTable table tr').size()>0){
		$(window).on('load resize',function(){
			winSize();
			/*if(winMode === 'ds'){*/
				$('.priceTable table tr').autoHeight({height:'height'});
			/*}*/
			/*if(winMode === 'sp'){
				$('.priceTable table tr th').removeAttr('style');
			}*/
		}).trigger('resize');
	}
	
	if($('#content #prefixAeondenwa .subSection .section').size()>0){
		$(window).on('load resize',function(){
			winSize();
			if(winMode === 'ds'){
				$('#content #prefixAeondenwa .subSection .section').autoHeight();
			}
			if(winMode === 'sp'){
				$('#content #prefixAeondenwa .subSection .section').removeAttr('style');
			}
		}).trigger('resize');
	}
	
	if($('#content #freeCall #use .stepList li .boxInner').size()>0){
		$(window).on('load resize',function(){
			winSize();
			if(winMode === 'ds'){
				$('#content #freeCall #use .stepList li .boxInner').autoHeight({column: 3});
			}
			if(winMode === 'sp'){
				$('#content #freeCall #use .stepList li .boxInner').removeAttr('style');
			}
		}).trigger('resize');
	}
	if($('#content #freeCall #use .stepList.using li .boxInner .txt02').size()>0){
		$(window).on('load resize',function(){
			winSize();
			if(winMode === 'ds'){
				$('#content #freeCall #use .stepList.using li .boxInner .txt02').autoHeight({height: 'height'});
			}
			if(winMode === 'sp'){
				$('#content #freeCall #use .stepList.using li .boxInner .txt02').removeAttr('style');
			}
		}).trigger('resize');
	}
	if($('#content .detail .productArea .txtArea .colorArea li').size()>0){
		$(window).on('load resize',function(){
			$('#content .detail .productArea .txtArea .colorArea li').removeAttr('style');
			$('#content .detail .productArea .txtArea .colorArea li').autoHeight({height: 'height'});
		}).trigger('resize');
	}
	if($('#content .shopFlow #sameday .flowList ol > li').size()>0){
		$(window).on('load resize',function(){
			winSize();
			if(winMode === 'ds'){
				$('#content .shopFlow #sameday .flowList ol > li').autoHeight({column: 3});
			}
			if(winMode === 'sp'){
				$('#content .shopFlow #sameday .flowList ol > li').removeAttr('style');
			}
		}).trigger('resize');
	}
	
	if($('#content .shopFlow #laterday .flowList ol > li').size()>0){
		$(window).on('load resize',function(){
			winSize();
			if(winMode === 'ds'){
				$('#content .shopFlow #laterday .flowList ol > li').autoHeight({column: 3});
			}
			if(winMode === 'sp'){
				$('#content .shopFlow #laterday .flowList ol > li').removeAttr('style');
			}
		}).trigger('resize');
	}
	if($('#content #planShare #shareFlow .newEntry ol > li .ListInner').size()>0){
		$(window).on('load resize',function(){
			winSize();
			if(winMode === 'ds'){
				$('#content #planShare #shareFlow .newEntry ol > li .ListInner').autoHeight();
			}
			if(winMode === 'sp'){
				$('#content #planShare #shareFlow .newEntry ol > li .ListInner').removeAttr('style');
			}
		}).trigger('resize');
	}
	if($('#content #planShare #shareFlow .mnpentry ol > li .ListInner').size()>0){
		$(window).on('load resize',function(){
			winSize();
			if(winMode === 'ds'){
				$('#content #planShare #shareFlow .mnpentry ol > li .ListInner').autoHeight();
			}
			if(winMode === 'sp'){
				$('#content #planShare #shareFlow .mnpentry ol > li .ListInner').removeAttr('style');
			}
		}).trigger('resize');
	}
	if($('#content .caseArea .case').size()>0){
		$(window).on('load resize',function(){
			winSize();
			if(winMode === 'ds'){
				$('#content .caseArea .case').autoHeight();
			}
			if(winMode === 'sp'){
				$('#content .caseArea .case').removeAttr('style');
			}
		}).trigger('resize');
	}
	if($('.row #content .pointSection .boxList01 li dl dt').size()>0){
		$(window).on('load resize',function(){
			winSize();
			if(winMode === 'ds'){
				$('.row #content .pointSection .boxList01 li dl dt').autoHeight({height:'height'});
			}
			if(winMode === 'sp'){
				$('.row #content .pointSection .boxList01 li dl dt').removeAttr('style');
			}
		}).trigger('resize');
	}
	if($('.row #content .pointSection .boxList01 li').size()>0){
		$(window).on('load resize',function(){
			winSize();
			if(winMode === 'ds'){
				$('.row #content .pointSection .boxList01 li').autoHeight();
			}
			if(winMode === 'sp'){
				$('.row #content .pointSection .boxList01 li').removeAttr('style');
			}
		}).trigger('resize');
	}
	if($('.row #content #summary .change ol li').size()>0){
		$(window).on('load resize',function(){
			winSize();
			if(winMode === 'ds'){
				$('.row #content #summary .change ol li').autoHeight();
			}
			if(winMode === 'sp'){
				$('.row #content #summary .change ol li').removeAttr('style');
			}
		}).trigger('resize');
	}
	if($('#content #speedswitchApp #use .stepList li .boxInner').size()>0){
		$(window).on('load resize',function(){
			winSize();
			if(winMode === 'ds'){
				$('#content #speedswitchApp #use .stepList li .boxInner').autoHeight({column: 3});
			}
			if(winMode === 'sp'){
				$('#content #speedswitchApp #use .stepList li .boxInner').removeAttr('style');
			}
		}).trigger('resize');
	}
	if($('#content #speedswitchApp #use .stepList.using li .boxInner .txt02').size()>0){
		$(window).on('load resize',function(){
			winSize();
			if(winMode === 'ds'){
				$('#content #speedswitchApp #use .stepList.using li .boxInner .txt02').autoHeight({height: 'height'});
			}
			if(winMode === 'sp'){
				$('#content #speedswitchApp #use .stepList.using li .boxInner .txt02').removeAttr('style');
			}
		}).trigger('resize');
	}
	
	if($('#content #anshinpack .useArea .stepList li').size()>0){
		$(window).on('load resize',function(){
			winSize();
			if(winMode === 'ds'){
				$('#content #anshinpack .useArea .stepList li').autoHeight({height: 'height'});
			}
			if(winMode === 'sp'){
				$('#content #anshinpack .useArea .stepList li').removeAttr('style');
			}
		}).trigger('resize');
	}
	if($('.top2Area #planArea .think div > ul').size()>0){
		$(window).on('load resize',function(){
			winSize();
			$('.top2Area #planArea .think div > ul').removeAttr('style');
			$('.top2Area #planArea .think div > ul').autoHeight({height: 'height'});
		}).trigger('resize');
	}
	
	/*--------------------------------
		
		 tab
		
	--------------------------------*/
	function productTab(){
		$('.selectExp li').click(function(){
			var selectTab = $(this).find('a').attr('href');
			$('.selectTabContent').hide();
			$(selectTab).show();
			$('.selectExp li').removeClass('select');
			$(this).addClass('select');
			return false;
		});
	}
	if($('.selectExp').size() > 0){
		productTab();
	}
	
	/*--------------------------------
		
		 hash link
		
	--------------------------------*/
	function hashLink(){
		
		var globalNavHeight;
		$(window).on('load resize',function(){
			if(winMode === 'ds'){
				globalNavHeight = 100;
			}else {
				globalNavHeight = 0;
			}
		});
		
		$(window).load(function(){
			$('a[href^="#"]:not(.noSc)').on('click',function(){
				var movePos = $(this).attr('href');
				movePos = $(movePos).offset().top;
				movePos = movePos - globalNavHeight;
				$('html,body').animate({scrollTop : movePos},'slow');
				return false;
			});
		});
		
		$('.supportListNav li a.noSc').click(function(){
			return false;
		});
		
		$('#footer a').click(function(){
			var thisLink = $(this).attr('href');
			if(thisLink.match(/#/)){
				var thisLinkNoHash = thisLink.split('#');
				var thisPageUrl = location.pathname;
				if(thisLinkNoHash[0] === thisPageUrl) {
					var scPos = $('#' + thisLinkNoHash[1]).offset().top - 100;
					$('html,body').animate({scrollTop : scPos},'slow');
					return false;
				}		
			}
		});
		
		//shoplist
		$(window).load(function(){
			$('#shoplist .top_anchor').on('click',function(){
				$('html,body').animate({scrollTop:0},'slow');
				return false;
			});
			$('#shoplist .dist_anchor').on('click',function(){
				var thisAnchor = $(this).attr('href');
				var thisMovePos = $(thisAnchor).offset().top - globalNavHeight;
				$('html,body').animate({scrollTop:thisMovePos},'slow');
				return false;
			});
		});
	}
	hashLink();
	
	/*--------------------------------
	
		hashOtherPage
	
	--------------------------------*/
	function hashOtherPage(){
		var isHash = location.hash;
		if(winMode === 'ds'){
			if(isHash.length){
				if($(isHash).size() > 0){
					var scrollToPos = $(isHash).offset().top;
					scrollToPos = scrollToPos - 130;
					$('html,body').scrollTop(scrollToPos);
				}
			}
		}
	}	
	$(window).on('load',function(){
		setTimeout(function() {
  			hashOtherPage();
		}, 50);
		
	});
	
	/*--------------------------------
	
		faq acordion
	
	--------------------------------*/
	//faq
	function faqOpen(){
		$('.isAc dd').hide();
		$('.isAc dt').on('click',function(){
			$(this).toggleClass('on');
			$(this).next('dd').slideToggle('500');
		});
	}
	faqOpen();

	/*--------------------------------
	
		shoplist shutter
	
	--------------------------------*/	
	function shoplistShutter(){
		var newsList = $('#content .shoplistDetail #news .newsWrap dl');
		var newsViewBtn = $('#content .shoplistDetail #news .shutterBtn');
		var newsNum = $(newsList).length;
		if(newsNum > 3){
			$(newsList).slice(3).hide();
		}
		var flag = true;
		$(newsViewBtn).on('click',function(){
			if(flag){
				$(newsList).show();
				$(this).addClass('op');
				$('#content .shoplistDetail #news dl:nth-of-type(3)').css({
					'border-bottom': '1px solid #e4d6df'
				});
				flag = false;
			}else {
				$(newsList).slice(3).hide();
				$(this).removeClass('op');
				$('#content .shoplistDetail #news dl:nth-of-type(3)').css({
					'border-bottom': 'none'
				});
				flag = true;
			}
		});
		
	}
	
	if($('#content .shoplistDetail #news .shutterBtn')){
		shoplistShutter();
	}

	/*--------------------------------
	
		uservoice case
	
	--------------------------------*/
	if($('#content .caseArea .case').size()>0){
		var cssTemp = '<style type="text/css">#content .caseArea .case:before{height:#[heightNum];}</style>';
		var caseHeight = $('#content .caseArea .case').height();
		cssTemp = cssTemp.replace('#[heightNum]',caseHeight + 'px');
		$('head').append(cssTemp);
	}

	/*--------------------------------
	
		plan index typetab
	
	--------------------------------*/
	function typeTabChange(){
		var areaWrap= '#content #basicSpec .tabHeading';
		var areaBtn = '#content #basicSpec .tabHeading li';
		var areaBack = '#content #basicSpec .simTypeArea';
		var selectTab = areaBtn + ' .wrap';
		$(selectTab).on('click',function(){
			var btnNum = $(this).parent().index()+1;
			$(areaBtn).removeClass('on');
			$(this).parent().addClass('on');
			
			$(areaWrap).removeClass('type01 type02 type03');
			$(areaWrap).addClass('type0' + btnNum);
			
			$('#content #basicSpec .typeTable').hide();
			$('#content #basicSpec .type' + btnNum + 'Table').show();
			
			$(areaBack).removeClass('type01 type02 type03');
			$(areaBack).addClass('type0' + btnNum);
			//console.log(btnNum);
		});
	}
	
	if($('#content #basicSpec').size() > 0){
		typeTabChange();
	}









});












