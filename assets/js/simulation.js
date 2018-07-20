$(function(){

var DEBUG_MODE = false;

    /*-------------------------------

        結果部分の固定

    -------------------------------*/
    $(window).on('load resize scroll',function(){
        var resultPos = $('.resultArea .priceBox').offset().top;
        var resultPosHeight = $('.resultArea .priceBox').height();
        var boxHeight = $('.resultArea .priceResult').height();

        var resultTotalPos = resultPos + resultPosHeight;

        var scrollPos = $(window).scrollTop();
        var scrollUnderPos = scrollPos + $(window).height();

        winSize();
        if(winMode === 'ds'){
            $('.resultArea .priceBox').css('height',boxHeight);
            if(scrollUnderPos < resultTotalPos) {
                $('.resultArea .priceResult').addClass('isFixed');
            }else {
                $('.resultArea .priceResult').removeClass('isFixed');
            }
        }
        if(winMode === 'sp'){
            $('.resultArea .priceBox').css('height',boxHeight);
            $('.resultArea .priceResult').removeClass('isFixed');
            if(scrollUnderPos < resultPos) {
                $('#content .resultArea .simulationResult .priceResultSp').show();
            }else {
                $('#content .resultArea .simulationResult .priceResultSp').hide();
            }

        }
    });

    /*-------------------------------

        step

    -------------------------------*/
    var step2Status = "";
    var step2_2Status = "";
    var step3Status = "";
    var step3_2Status = "";
    var step4Status = "";
    var step4SimStatus = "";
    var step5Status = "";
    var step6Status = "";
    var step7Status = "";
    var step8UnlimitStatus = "";
    var step8Status = "";

    var step1Num = 0;
    var step3Num = 0;
    var step3_2Num = 0;
    var step4Num = 0;
    var step6Num = 0;
    var step7Num = 0;
    var step8UnlimitNum = 0;
    var step8Num = 0;
    
    var monthNum = 0;

    var stepAll = $('#content .stepArea');
    var step1 = $('#content #step1');
    var step2 = $('#content #step2');
    var step2_2 = $('#content #step2_2');
    var step3 = $('#content #step3');
    var step3_2 = $('#content #step3_2');
    var step4 = $('#content #step4');
    var step4Sim = $('#content #step4Sim');
    var step5 = $('#content #step5');
    var step6 = $('#content #step6');
    var step7 = $('#content #step7');
    var step8Unlimit = $('#content #step8Unlimit');
    var step8 = $('#content #step8');
    //var endBtn = $('#content .endBtn');

    var step7PlanList = $('#content #step7 .planList');
    var step7PlanVoiceSim = $('#content #step7 .voiceSim');
    var step7PlanDataSim = $('#content #step7 .dataSim');
    var step7PlanSmsSim = $('#content #step7 .smsSim');

    var entryBtn = $('.resultArea .costArea .btnArea .btn .buyWeb a');
    var printBtn = $('.resultArea .costArea .btnArea .btn .buyShop a');

    $('#content .stepArea .linkTxt a').on('click',function(){
        var isCheck = $(this).parents('.stepOff').length;
        if(isCheck) {
            return false;
        }
    });

    //初期費用
    //var priceNewCommission = 1;

    var globalNavHeight = 0;
    function navHeightAdjust() {
        if(winMode === 'ds'){
            globalNavHeight = 100;
        }
        if(winMode === 'sp'){
            globalNavHeight = 0;
        }
    }

    //step1 現在の金額
    var step1List = $('#step1 .btn');
    $('#isPrice').focusin(function(){
        $('#content #step1 .nowPrice .priceAlert').hide();
    });


    step1List.click(function(){
        resetStatus(step1List);
        step1Num = $('#isPrice').val();
        step1Num = step1Num.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        });
        if( step1Num.match(/^[0-9]+$/)){
            $('.resultArea .nowPrice .num .changeNum').text(separate(step1Num));
            //次へ移動
            navHeightAdjust();
            $('html,body').animate({scrollTop : $('#step2').offset().top - globalNavHeight},'slow');
            $('#step2').removeClass('stepOff');
            if(winMode === 'sp'){
                $('#content .resultArea .simulationResult .priceResultSp').css('position','fixed');
            }
        }else {
            $('#content #step1 .nowPrice .priceAlert').show();
            resetStatus(step1List);
            $('#step2').addClass('stepOff');
            step2Status = "";
            step1Num = "";
            $('.resultArea .nowPrice .num .changeNum').text(0);
            //return false;
        }
    });

    //step2 ご希望の購入方法
    var step2List = $('#step2 .listWrap > ul li');
    step2List.click(function(){
        if(!$(this).parents('.stepArea').hasClass('stepOff')){
            resetStatus(step2List);
            step2Status = $(this).attr('class');
            $(this).addClass('select');

            if(step2Status === 'set'){
                step4.show();
                step5.show();
                step6.show();
                step8.show();
                
                step4Sim.hide();
                
                $('.resultArea .costArea .bulk,.resultArea .mindSuppot').show();
                step7.find('h3').removeClass('num6').addClass('num8');
            }
            if(step2Status === 'sim'){
                step4.hide();
                step5.hide();
                step6.hide();
                step8.hide();
                
                step4Sim.show();

                $('.resultArea .costArea .bulk,.resultArea .mindSuppot,.resultArea .wifiSuppot').hide();
                step7.find('h3').removeClass('num8').addClass('num6');
            }

            //次へ移動
            navHeightAdjust();
            $('html,body').animate({scrollTop : $('#step2_2').offset().top - globalNavHeight},'slow');
            $('#step2_2').removeClass('stepOff');
        }
    });
    
    //step2_2 回線選択
    var step2_2List = $('#step2_2 .listWrap > ul li');
    step2_2List.click(function(){
        if(!$(this).parents('.stepArea').hasClass('stepOff')){
            resetStatus(step2_2List);
            step2_2Status = $(this).attr('class');
            $(this).addClass('select');
            
            //au回線しかない端末の非表示
            var noAuProduct = ['huawei_nova_lite2',
            'honor9',
            'huawei_p10',
            'huawei_p10_plus',
            'vaio_phone_a_vpa0511s',
            'alcatel_pixi4',
            'huawei_nova_lite',
            'zte_blade_e01',
            'xperia_j1_compact',
            'aquos_sh_n01',
            'huawei_p20'];
            var auPro = 0;
            
            //docomo 
            if(step2_2Status === 'docomo'){
                $('#content #step3 .listWrap > ul li .auTxt').hide();
                $('#content #step3 .listWrap > ul li.dataSim .btn').removeClass('off');
                $('#step4Sim').show();
                $('#step7 h3').removeClass('num5').addClass('num6');
                
                //au回線しかない端末の表示
                $.each(noAuProduct,function(){
                    $('#step4 #' + noAuProduct[auPro]).show();
                    auPro++;
                });
            }
            //set - docomo
            if(step2Status === 'set' && step2_2Status === 'docomo'){
                $('#step4Sim').hide();
            }
            //sim - docomo
            if(step2Status === 'sim' && step2_2Status === 'docomo'){
                step5.hide();
                step8.hide();
            }
            //au
            if(step2_2Status === 'au'){
                $('#content #step3 .listWrap > ul li .auTxt').show();
                $('#content #step3 .listWrap > ul li.dataSim .btn').addClass('off');
                $('#step4Sim').hide();
                
                //au回線しかない端末の非表示
                $.each(noAuProduct,function(){
                    $('#step4 #' + noAuProduct[auPro]).hide();
                    auPro++;
                });
                
            }
            //set - au
            if(step2Status === 'set' && step2_2Status === 'au'){
                $('#step5 h3').removeClass('num7').addClass('num6');
                $('#step6 h3').removeClass('num8').addClass('num7');
                $('#step7 h3').removeClass('num9').addClass('num8');
                $('#step8 h3').removeClass('num10').addClass('num9');
            }
            //sim - au
            if(step2Status === 'sim' && step2_2Status === 'au'){
                $('#step7 h3').removeClass('num6').addClass('num5');
                step5.hide();
                step8.hide();
            }

            //次へ移動
            navHeightAdjust();
            $('html,body').animate({scrollTop : $('#step3').offset().top - globalNavHeight},'slow');
            $('#step3').removeClass('stepOff');
        }
    });

    //step3 ご希望のSIMの種類
    var step3List = $('#step3 .listWrap > ul li');
    step3List.click(function(){

        /*function numChange4(){
            $('#step3_2').show();
            $('#step4 h3').removeClass('num4').addClass('num5');
            $('#step5 h3').removeClass('num5').addClass('num6');
            $('#step6 h3').removeClass('num6').addClass('num7');
            $('#step7 h3').removeClass('num7').addClass('num8');
            $('#step8 h3').removeClass('num8').addClass('num9');
        }
        function numChange4Reset(){
            $('#step3_2').hide();
            $('#step4 h3').removeClass('num5').addClass('num4');
            $('#step5 h3').removeClass('num6').addClass('num5');
            $('#step6 h3').removeClass('num7').addClass('num6');
            $('#step7 h3').removeClass('num8').addClass('num7');
            $('#step8 h3').removeClass('num9').addClass('num8');
        }
        function simSelectNumChange(){
            $('#step3_2').show();
            $('#step4Sim h3').removeClass('num4').addClass('num5');
            $('#step7 h3').removeClass('num7').addClass('num6');
        }
        function simSelectNumChangeReset(){
            $('#step3_2').hide();
            $('#step4Sim h3').removeClass('num5').addClass('num4');
            $('#step7 h3').removeClass('num6').addClass('num7');
        }*/

        if(!$(this).parents('.stepArea').hasClass('stepOff')){
        
            //au datasim noClick
            step3Status = $(this).attr('class');
            if(step2_2Status === 'au' && step3Status ==='dataSim'){
                return false;
            }
        
            resetStatus(step3List);
            step3Status = $(this).attr('class');
            //numChange4Reset();
            //simSelectNumChangeReset();
            
            $(this).addClass('select');
            $('#content #step4 .dsLimited').hide();

            //set - docomo - 音声SIM
            if(step2Status === 'set' /*&& step2_2Status === 'docomo'*/ && step3Status === 'voiceSim'){
                step3Num = simPrice_array['voice'];
                $('#step3_2').hide();
                $('#step4 h3').removeClass('num6').addClass('num5');
                step7PlanList.hide();
                step7PlanVoiceSim.show();
            }
            
            if(step2Status === 'set' && step2_2Status === 'docomo' && step3Status === 'voiceSim'){
                $('#step4 #aquos_sh_n01').show();
            }

            //set - docomo - データSIM
            if(step2Status === 'set' /*&& step2_2Status === 'docomo' */&& step3Status === 'dataSim'){
                step3Num = simPrice_array['data'];
                step7PlanList.hide();
                $('#content #step4 .dsLimited').show();
                step7PlanDataSim.show();
                $('#step4 #aquos_sh_n01').hide();
                $('#step3_2').show();
                $('#step4 h3').removeClass('num5').addClass('num6');
                $('#step5 h3').removeClass('num6').addClass('num7');
                $('#step6 h3').removeClass('num7').addClass('num8');
                $('#step7 h3').removeClass('num8').addClass('num9');
                $('#step8 h3').removeClass('num9').addClass('num10');
                /*$(step8Unlimit).hide(); //かけ放題
                $('#content .resultArea .costArea .costMonth .unlimitSuppot').hide();*/
                
                winSize();
                if(winMode === 'sp' ) {
                    $('#step4 #gakken_tablet').css({
                        //'margin-left': '0',
                        'margin-left': '2%',
                        clear: 'none'
                    });
                    $('#step4 #aterm_mr05ln').css({
                        'clear': 'none',
                        //'clear': 'both',
                        //'margin-left': '0'
                        'margin-left': '2%'
                    });
                }else {
                    $('#step4 #gakken_tablet').css({
                        //'margin-left': '0' 
                    });
                }
                /*if(step2Status === 'set'){
                    numChange4();
                }else {
                    simSelectNumChange();
                }*/
            }

            //set - docomo - SMS
            if(step2Status === 'set' /*&& step2_2Status === 'docomo'*/ && step3Status === 'smsSim'){
                step3Num = simPrice_array['sms'];

                step7PlanList.hide();
                step7PlanSmsSim.show();
                if(step2_2Status === 'docomo'){
                    $('#step3_2').show();
                    $('#step4 h3').removeClass('num5').addClass('num6');
                    $('#step5 h3').removeClass('num6').addClass('num7');
                    $('#step6 h3').removeClass('num7').addClass('num8');
                    $('#step7 h3').removeClass('num8').addClass('num9');
                    $('#step8 h3').removeClass('num9').addClass('num10');
                }else {
                    $('#step3_2').hide();
                }
                
                $('#step4 #aquos_sh_n01').hide();
            }
            
            //sim - docomo -voice
            if(step2Status === 'sim' && step2_2Status === 'docomo' && step3Status === 'voiceSim'){
                step3Num = simPrice_array['voice'];
                $('#step3_2').hide();
                $('#step4Sim h3').removeClass('num6').addClass('num5');
                $('#step7 h3').removeClass('num7').addClass('num6');
            }
            
            //sim - docomo - data
            if(step2Status === 'sim' && step2_2Status === 'docomo' && step3Status === 'dataSim'){
                step3Num = simPrice_array['data'];
                step7PlanList.hide();
                step7PlanDataSim.show();
                $('#step4 #aquos_sh_n01').hide();
                $('#step4Sim h3').removeClass('num5').addClass('num6');
                $('#step7 h3').removeClass('num6').addClass('num7');
                //simSelectNumChange();
                $('#step3_2').show();
            }
            //sim- docomo - sms
            if(step2Status === 'sim' && step2_2Status === 'docomo' && step3Status === 'smsSim'){
                step3Num = simPrice_array['sms'];
                step7PlanList.hide();
                step7PlanSmsSim.show();
                $('#step4 #aquos_sh_n01').hide();
                $('#step4Sim h3').removeClass('num5').addClass('num6');
                $('#step7 h3').removeClass('num6').addClass('num7');
                $('#step3_2').show();
            }
            
            //set - au - sms
            if(step2Status === 'set' && step2_2Status === 'au' && step3Status === 'smsSim'){
                step3_2Status = 'sim01';
                step7PlanList.hide();
                step7PlanDataSim.show();
            }
            
            //sim -au
            if(step2Status === 'sim' && step2_2Status === 'au'){
                step4SimStatus = 'free';
                step7PlanList.hide();
                step7PlanVoiceSim.show();
                step3Num = simPrice_array['free'];
                step4Num = simPrice_array['free'];
            }
            //sim - au - sms
            if(step2Status === 'sim' && step2_2Status === 'au' && step3Status === 'smsSim'){
                step3_2Status = 'sim01';
                step7PlanList.hide();
                step7PlanDataSim.show();
                step3Num = simPrice_array['free'];
                step4Num = simPrice_array['free'];
            }
            
            if(step2Status === 'sim'){
                step5.hide();
                step5beforeTxt.show();
                step5ListAll.hide();
            }else {
                step5.show();
                step5beforeTxt.show();
                step5ListAll.hide();
            }
            
            

            //次へ移動
            navHeightAdjust();
            if(step2Status === 'set' && step3Status === 'voiceSim') {
                $('html,body').animate({scrollTop : $('#step4').offset().top - globalNavHeight},'slow');
                $('#step4').removeClass('stepOff');
            }else if (step2Status === 'sim' && step2_2Status === 'docomo' && step3Status === 'voiceSim') {
                $('html,body').animate({scrollTop : $('#step4Sim').offset().top - globalNavHeight},'slow');
                $('#step4Sim').removeClass('stepOff');
            }else if (step2Status === 'set' && step2_2Status === 'au' && step3Status === 'smsSim') {
                $('html,body').animate({scrollTop : $('#step4').offset().top - globalNavHeight},'slow');
                $('#step4').removeClass('stepOff');
            }else if (step2Status === 'sim' && step2_2Status === 'au') {
                $('html,body').animate({scrollTop : $('#step7').offset().top - globalNavHeight},'slow');
                $('#step7').removeClass('stepOff');
            }else {
                $('html,body').animate({scrollTop : $('#step3_2').offset().top - globalNavHeight},'slow');
                $('#step3_2').removeClass('stepOff');
            }
        }
    });

    //step3_2 ご希望のSIMのタイプ
    var step3_2List = $('#step3_2 .listWrap > ul li');
    step3_2List.click(function(){
        if(!$(this).parents('.stepArea').hasClass('stepOff')){
            resetStatus(step3_2List);
            step3_2Status = $(this).attr('class');
            $(this).addClass('select');
            if(step2Status === 'set'){
                $('html,body').animate({scrollTop : $('#step4').offset().top - globalNavHeight},'slow');
                $('#step4').removeClass('stepOff');
            }else {
                $('html,body').animate({scrollTop : $('#step4Sim').offset().top - globalNavHeight},'slow');
                $('#step4Sim').removeClass('stepOff');
            }
        }
    });


    var step4List = $('#step4 .listWrap > ul li');
    var step5Wrap = $('#step5 .listWrap');
    var step5ListAll = $('#step5 .listWrap > .color_wrap');
    var step5List = $('#step5 .listWrap > .color_wrap > ul li');
    var step5beforeTxt = $('#step5 .listWrap .colorTxt');

    //step4 ご希望の端末
    step4List.click(function(){
        if(!$(this).parents('.stepArea').hasClass('stepOff')){
            resetStatus(step4List);
            step4Status = $(this).attr('id');
            $(this).addClass('select');

            step5beforeTxt.hide();
            step5ListAll.hide();
            step5Wrap.children('#wrap_' + step4Status).show();

            //step8のサポート変更
            if(step4Status === 'aterm_mr05ln') {
                $('#step8 .mindSuppot').hide();
                $('#content .resultArea .costArea .costMonth .mindSuppot').hide();
                $('#step8 .wifiSupport').show();
                $('#content .resultArea .costArea .costMonth .wifiSuppot').show();
            }

            //端末の値段
            step4Num = deviceData_array[step4Status]['price'];

            //次へ移動
            navHeightAdjust();
            $('html,body').animate({scrollTop : $('#step5').offset().top - globalNavHeight},'slow');
            $('#step5').removeClass('stepOff');
        }
    });

    //ご希望のSIMサイズ
    var step4SimList = $('#step4Sim .listWrap > ul li');
    step4SimList.click(function(){
        if(!$(this).parents('.stepArea').hasClass('stepOff')){
            resetStatus(step4SimList);
            step4SimStatus = $(this).attr('class');
            $(this).addClass('select');

            //SIMの値段
            step4Num = 3240;

            //次へ移動
            navHeightAdjust();
            $('html,body').animate({scrollTop : $('#step7').offset().top - globalNavHeight},'slow');
            $('#step7').removeClass('stepOff');
        }
    });

    //step5 ご希望の端末カラー
    step5List.click(function(){
        if(!$(this).parents('.stepArea').hasClass('stepOff')){
            resetStatus(step5List);
            step5Status = $(this).attr('class').split(" ")[1];
            $(this).addClass('select');

            //カラー
            step5Status = step5Status.split("_")[1];

            //次へ移動
            navHeightAdjust();
            $('html,body').animate({scrollTop : $('#step6').offset().top - globalNavHeight},'slow');
            $('#step6').removeClass('stepOff');
        }
    });

    //step6 支払い方法
    var step6List = $('#step6 .listWrap > ul li');
    step6List.click(function(){
        if(!$(this).parents('.stepArea').hasClass('stepOff') && !$(this).hasClass('btnOff')){
            resetStatus(step6List);
            step6Status = $(this).attr('class');
            $(this).addClass('select');

            //分割
            if(step6Status === 'bulk') {
                step6Num = 0;
                $('.costFirst .bulk').show();
                $('.costMonth .bulk').hide();
            }

            if(step6Status === 'split') {
                step6Num = Math.round(step4Num / 24);
                $('.costFirst .bulk').hide();
                $('.costMonth .bulk').show();
            }

            //次へ移動
            navHeightAdjust();
            $('html,body').animate({scrollTop : $('#step7').offset().top - globalNavHeight},'slow');
            $('#step7').removeClass('stepOff');
        }else {//分割非対応端末
        }
    });

    //step7 プラン
    var step7List = $('#step7 .planList > li');
    step7List.click(function(){
        if(!$(this).parents('.stepArea').hasClass('stepOff')){
            resetStatus(step7List);
            step7Status = $(this).attr('id');
            $(this).addClass('select');

            //プランの値段
            var step7StatusName = step7Status.split('_')[0];
            var step7StatusVol = step7Status.split('_')[1] - 1;
            step7Num = planPrice[step7StatusName][step7StatusVol];

            //次へ移動
            navHeightAdjust();
            if(step2Status === 'set'){
                /*if(step3Status === 'voiceSim'){ //かけ放題
                    $('html,body').animate({scrollTop : $('#step8Unlimit').offset().top - globalNavHeight},'slow');
                    $('#step8Unlimit').removeClass('stepOff');  
                }else {*/
                    $('html,body').animate({scrollTop : $('#step8').offset().top - globalNavHeight},'slow');
                    $('#step8').removeClass('stepOff'); 
                /*}*/
            }else {
                $('html,body').animate({scrollTop : $('.resultArea').offset().top - globalNavHeight},'slow');
                $('.resultArea .costArea .btnArea').removeClass('stepOff');

                if(step2Status === 'sim') {
                    step2StatusJson = step2Status + 'Only'
                    step3StatusJson = step3Status.replace('Sim','');
                    step3_2simType = step3_2Status;
                    var step4SimStatusJsons = step4SimStatus.replace('Sim','');
                    if(step3Status === 'voiceSim'){
                        linkHref = deviceData_array[step2StatusJson][step3StatusJson][step4SimStatusJsons]['linkURL'];
                    }else if(step2_2Status === 'au'){
                        linkHref = deviceData_array[step2StatusJson][step3StatusJson]['free']['linkURL'];
                    }else {
                        linkHref = deviceData_array[step2StatusJson][step3StatusJson][step4SimStatusJsons][step3_2simType]['linkURL'];
                    }
                }
                entryBtn.attr('href',linkHref);
            }
        }
    });
    
    //step8_2 かけ放題
    /*var step8UnlimitList = $('#step8Unlimit .listWrap > ul li');
    step8UnlimitList.click(function(){
        if(!$(this).parents('.stepArea').hasClass('stepOff')){
            resetStatus(step8UnlimitList);
            $(this).addClass('select');
            step8UnlimitStatus = $(this).attr('class').split(" ")[0];
            if(step8UnlimitStatus === 'unlimit050'){
                step8UnlimitNum = 1500;
            }else if(step8UnlimitStatus === 'unlimitAeon'){
                step8UnlimitNum = 850;
            }else if(step8UnlimitStatus === 'unlimitNo'){
                step8UnlimitNum = 0;
            }
            $('html,body').animate({scrollTop : $('#step8').offset().top - globalNavHeight},'slow');
            $('#step8').removeClass('stepOff'); 
        }
    });*/

    //step8 安心サポート
    var step8List = $('#step8 .listWrap > ul li');
    step8List.click(function(){
        if(!$(this).parents('.stepArea').hasClass('stepOff')){
            resetStatus(step8List);
            step8Status = $(this).attr('class').split(" ")[0];
            var step8parentClass = $(this).parent().parent().parent().attr('class');
            $(this).addClass('select');

            //安心サポートの値段
            if(step8Status === 'join' && step8parentClass === 'mindSuppot' && step4Status !== 'xperia_j1_compact' && step4Status !== 'aquos_sh_n01') {
                step8Num = 648;
            }else if(step8Status === 'join' && step8parentClass === 'wifiSupport') {
                step8Num = 378;
            }else if(step8Status === 'join' && step4Status === 'xperia_j1_compact') {
                step8Num = 756;
            }else if(step8Status === 'join' && step4Status === 'aquos_sh_n01'){
                step8Num = 500;
            }else {
                step8Num = 0;
            }

            //次へ移動
            navHeightAdjust();
            $('html,body').animate({scrollTop : $('.resultArea').offset().top - globalNavHeight},'slow');
            $('.endBtn').removeClass('stepOff');

            $('.resultArea .costArea .btnArea').removeClass('stepOff');
            var step3StatusJson;
            var linkHref;
            if(step2Status === 'set' && step3Status === 'voiceSim'){
                step3StatusJson = step3Status.replace('Sim','');
                linkHref = deviceData_array[step4Status][step3StatusJson][step5Status][step2_2Status]['linkURL'];
                //console.log(step4Status,step3StatusJson,step5Status,step2_2Status);
            }
            if(step2Status === 'set' && step3Status === 'dataSim' || step3Status === 'smsSim'){
                step3StatusJson = step3Status.replace('Sim','');
                step3_2simType = step3_2Status;
                linkHref = deviceData_array[step4Status][step3StatusJson][step5Status][step3_2simType][step2_2Status]['linkURL'];
                //console.log(step4Status,step3StatusJson,step5Status,step3_2simType,step2_2Status);
            }
            /*if(step2Status === 'sim') {
                step2StatusJson = step2Status + 'Only'
                step3StatusJson = step3Status.replace('Sim','');
                var step4SimStatuJsons = step4SimStatus.replace('Sim','');
                linkHref = deviceData_array[step2StatusJson][step3StatusJson][step4SimStatuJsons]['linkURL'];
            }*/
            entryBtn.attr('href',linkHref);
        }
    });

    //この内容でシミュレーション
    /*endBtn.click(function(){
        if(!$(this).hasClass('stepOff')){
            navHeightAdjust();
            $('html,body').animate({scrollTop : $('.resultArea').offset().top - globalNavHeight},'slow');
            $('.resultArea .costArea .btnArea').removeClass('stepOff');


        }
    });*/

    //この内容でのお申込みはこちら
    entryBtn.click(function(){
        if($(this).parents('.btnArea').hasClass('stepOff')){
            return false;
        }else {
            ga('send', 'event', 'KPI', 'simulation', 'apply');
        }
    });
    
    /*printBtn.click(function(){
        if($(this).parents('.btnArea').hasClass('stepOff')){
            return false;
        }else {
            //ga('send', 'event', 'KPI', 'simulation', 'apply');
            var printUrl = $(this).attr('href');
            var printHash = 'in_buyType=' + step2Status + //購入方法
                            '&in_simSelect=' + step3Status  + //SIMの種類
                            '&in_simType=' + step3_2Status + //SIMのタイプ
                            '&in_selectProduct=' + step4Status + //ご希望の端末
                            '&in_simSize=' + step4SimStatus + //SIMのみ
                            '&in_selectColor=' + step5Status + //色
                            '&in_payment=' + step6Status + //支払い方法
                            '&in_plan=' + step7Status + //通信プラン
                            '&in_support=' + step8Status + //安心サポート加入
                            '&monthlyTotal=' + monthNum + //月額
                            '&nowPrice=' + step1Num + //現在の金額
                            '&in_initial_sim=' + step3Num + //SIMの金額
                            '&in_monthly_product=' + step4Num + //端末orSIMのみの金額
                            '&in_monthly_plan=' + step7Num + //通信プランの金額
                            '&in_monthly_support=' + step8Num; //安心サポートの金額
            window.open(printUrl + '?' + printHash, '_blank');
            return false;
            
        }
    });*/

    stepAll.click(function(){
        //シミュレーション結果表示
        //毎月のお支払
        var monthNum = 0;

        //set or sim
        if(step2Status === 'set'){
            //monthNum = step3Num;
        }else {
            monthNum = step7Num;
        }

        //一括or 分割
        if(step6Status === 'split'){
            monthNum = step7Num + step6Num + /*step8UnlimitNum + */step8Num;
        }
        if(step6Status === 'bulk'){
            monthNum = step7Num + /*step8UnlimitNum + */step8Num;
        }
        $('.priceResult .aeonResult .num .changeNum').text(separate(monthNum));
        $('.priceResultSp .aeonResult .num .changeNum').text(separate(monthNum));

        //現在より
        if(step1Num < monthNum) {
            //プラス
            $('.priceResult .comparison .comBox,.priceResultSp .comparison .spBox').hide();
            $('.priceResult .comparison .high,.priceResultSp .comparison .high').show();
            $('.priceResult .dealsArea').hide();
            $('.priceResult .comparison .num .changeNum,.priceResultSp .comparison .num .changeNum').text(separate((step1Num - monthNum) * -1));
        }else {
            //お得
            $('.priceResult .comparison .comBox,.priceResultSp .comparison .high').hide();
            $('.priceResult .comparison .deals,.priceResultSp .comparison .spBox').show();
            $('.priceResult .dealsArea').show();
            $('.priceResult .comparison .num .changeNum,.priceResultSp .comparison .num .changeNum').text(separate(step1Num - monthNum));
        }
        //2年間でお得
        $('.priceResult .dealsArea .numArea .num,.priceResultSp .dealsArea .num .changeNum').text(separate((step1Num - monthNum) * 24));

        //詳細表示

        //初期費用
        $('.resultArea .costFirst .newCost').text(separate(step3Num));
        //端末料金一括
        if(step6Status === 'bulk'){
            $('.resultArea .costFirst .bulk .deviceCost').text(separate(step4Num));
        }
        if(step6Status === 'split'){
            $('.resultArea .costFirst .bulk .deviceCost').text(0);
        }
        //通信料金
        $('.resultArea .costMonth .signalCost').text(separate(step7Num));
        //端末料金分割
        $('.resultArea .costMonth .bulk .signalCost').text(separate(step6Num));
        //かけ放題
        //$('#content .resultArea .costArea .costMonth .unlimitSuppot .unlimitSupport').text(separate(step8UnlimitNum));
        //安心サポート
        $('.resultArea .costMonth .mindSuppot .peaceSupport').text(separate(step8Num));
        //安心パック
        $('.resultArea .costMonth .wifiSuppot .peaceSupport').text(separate(step8Num));
        
        //キャンペーン注釈
        if(step2Status === 'set'){
            $('.attList .cp01').show();
        }else {
            $('.attList .cp01').hide();
        }
        
        if( step2Status === 'set'|| step2Status === 'sim'){
            $('.attList .cp02').show();
        }else {
            $('.attList .cp02').hide();
        }
        
        if( step2_2Status === 'docomo'){
            if(step3Status === 'voiceSim'){
                if(step4Status === 'huawei_p20') {
                    $('.attList .cp03').show();
                }else {
                    $('.attList .cp03').hide();
                }
            }else {
                $('.attList .cp03').hide();
            }
        }else {
            $('.attList .cp03').hide();
        }
        
        if( step3Status === 'voiceSim'){
            if(step4Status === 'huawei_p20_lite'){
                $('.attList .cp04').show();
            }else {
                $('.attList .cp04').hide();
            }
        }else {
            $('.attList .cp04').hide();
        }
        
        if( step2_2Status === 'docomo'){
            if(step3Status === 'voiceSim'){
                if(step4Status === 'huawei_nova_lite2') {
                    $('.attList .cp05').show();
                }else {
                    $('.attList .cp05').hide();
                }
            }else {
                $('.attList .cp05').hide();
            }
        }else {
            $('.attList .cp05').hide();
        }
        
        if(step3Status === 'voiceSim'){
            if(step4Status === 'huawei_nova'){
                $('.attList .cp06').show();
            }else {
                $('.attList .cp06').hide();
            }
            if(step4Status === 'arrows_m03'){
                $('.attList .cp07').show();
            }else {
                $('.attList .cp07').hide();
            }
        }else {
            $('.attList .cp05,.attList .cp06,.attList .cp07').hide();
        }
        
        if( step2Status === 'set'){
            if(step3Status === 'voiceSim'){
                if(step4Status === 'aquos_sense_plus_sh_m07') {
                    $('.attList .cp08').show();
                }else {
                    $('.attList .cp08').hide();
                }
            }else {
                $('.attList .cp08').hide();
            }
        }else {
            $('.attList .cp08').hide();
        }
        
        //注釈エリアの出し消し
        var listStatus = false;
        $('.attList02 li').each(function(){
            var listView = $(this).css('display');
            if(listView !== "none"){
                listStatus = true;
            }
        });
        if(listStatus){
            $('.attList02').show();
        }else {
            $('.attList02').hide();
        }
        
        
        //
        /*if( step2Status === 'set'){
            if(step4Status === 'alcatel_pixi4'){
                $('.attList .cp05').show();
                $('#content .stepArea .attDv01').show();//分割払い無し注釈
                $('#content #step6 .split').addClass('btnOff');//分割ボタン押せないように
            }else {
                $('.attList .cp05').hide();
                $('#content .stepArea .attDv01').hide();//分割払い無し注釈
                $('#content #step6 .split').removeClass('btnOff');//分割ボタン押せるように
            }
        }else {
            $('.attList .cp05').hide();
        }*/


        if (DEBUG_MODE){
            //debug
            console.log('STEP2：' + step2Status + '\n',
                        'STEP2_2：' + step2_2Status + '\n',
                        'STEP3：' + step3Status + '\n',
                        'STEP3_2：' + step3_2Status + '\n',
                        'STEP4：' + step4Status + '\n',
                        'STEP4SIMのみ：' + step4SimStatus + '\n',
                        'STEP5：' + step5Status + '\n',
                        'STEP6：' + step6Status + '\n',
                        'STEP7：' + step7Status + '\n',
                        'STEP8：' + step8Status + '\n',
                        '月額：' + monthNum + '\n',
                        '現在の金額：' + step1Num + '\n',
                        'SIMの値段：' + step3Num + '\n',
                        '端末 or sim：' + step4Num + '\n',
                        'プラン：' + step7Num + '\n',
                        //'かけ放題' + step8UnlimitNum + '\n',
                        '安心：' + step8Num + '\n'
                        );
        }
    });

    //リセット
    function resetStatus(thisList){
        switch(thisList){
            case step1List:
                step2Status = "";
                step3Status = "";
                step3_2Status = "";
                step4Status = "";
                step4SimStatus = "";
                step5Status = "";
                step6Status = "";
                step7Status = "";
                step8UnlimitStatus = "";
                step8Status = "";

                step3Num = 0;
                step4Num = 0;
                step6Num = 0;
                step7Num = 0;
                step8UnlimitNum = 0;
                step8Num = 0;

                step2List.removeClass('select');
                $('#content #step3 .listWrap > ul li .auTxt').hide();
                $('#content #step3 .listWrap > ul li.dataSim .btn').removeClass('off');
                step3List.removeClass('select');
                step3_2List.removeClass('select');
                step4List.removeClass('select');
                step4SimList.removeClass('select');
                step5List.removeClass('select');
                step6List.removeClass('select');
                step7List.removeClass('select');
                //step8UnlimitList.removeClass('select');
                step8List.removeClass('select');

                $('#step8 .mindSuppot').show();
                $('#step8 .wifiSupport').hide();
                $('#step3_2').hide();
                step5.show();
                step5beforeTxt.show();
                step5ListAll.hide();
                step8.show();

                step7PlanList = $('#content #step7 .planList').hide();
                step7PlanVoiceSim = $('#content #step7 .voiceSim').show();
                $('#content .resultArea .costArea .costMonth .mindSuppot').show();
                $('#content .resultArea .costArea .costMonth .wifiSuppot').hide();
                $('#content .resultArea .costArea .costMonth .unlimitSuppot').hide();

                stepAll.addClass('stepOff');
                step1.removeClass('stepOff');
                step2.removeClass('stepOff');
                $('.resultArea .costArea .btnArea').addClass('stepOff');
                break;
            case step2List:
                step2Status = "";
                step2_2Status = "";
                step3Status = "";
                step3_2Status = "";
                step4Status = "";
                step4SimStatus = "";
                step5Status = "";
                step6Status = "";
                step7Status = "";
                step8UnlimitStatus = "";
                step8Status = "";

                step3Num = 0;
                step4Num = 0;
                step6Num = 0;
                step7Num = 0;
                step8UnlimitNum = 0;
                step8Num = 0;

                step2List.removeClass('select');
                step2_2List.removeClass('select');
                step3List.removeClass('select');
                $('#content #step3 .listWrap > ul li .auTxt').hide();
                $('#content #step3 .listWrap > ul li.dataSim .btn').removeClass('off');
                step3_2List.removeClass('select');
                step4List.removeClass('select');
                step4SimList.removeClass('select');
                step5List.removeClass('select');
                step6List.removeClass('select');
                step7List.removeClass('select');
                //step8UnlimitList.removeClass('select');
                step8List.removeClass('select');

                $('#step8 .mindSuppot').show();
                $('#step8 .wifiSupport').hide();
                $('#step3_2').hide();
                step5.show();
                step5beforeTxt.show();
                step5ListAll.hide();
                step8.show();

                step7PlanList = $('#content #step7 .planList').hide();
                step7PlanVoiceSim = $('#content #step7 .voiceSim').show();
                $('#content .resultArea .costArea .costMonth .mindSuppot').show();
                $('#content .resultArea .costArea .costMonth .wifiSuppot').hide();
                $('#content .resultArea .costArea .costMonth .unlimitSuppot').hide();

                stepAll.addClass('stepOff');
                step1.removeClass('stepOff');
                step2.removeClass('stepOff');
                $('.endBtn').addClass('stepOff');
                $('.resultArea .costArea .btnArea').addClass('stepOff');
                break;
            case step2_2List:
                step2_2Status = "";
                step3Status = "";
                step3_2Status = "";
                step4Status = "";
                step4SimStatus = "";
                step5Status = "";
                step6Status = "";
                step7Status = "";
                step8UnlimitStatus = "";
                step8Status = "";

                step3Num = 0;
                step4Num = 0;
                step6Num = 0;
                step7Num = 0;
                step8UnlimitNum = 0;
                step8Num = 0;

                step2_2List.removeClass('select');
                step3List.removeClass('select');
                step3_2List.removeClass('select');
                step4List.removeClass('select');
                step4SimList.removeClass('select');
                step5List.removeClass('select');
                step6List.removeClass('select');
                step7List.removeClass('select');
                //step8UnlimitList.removeClass('select');
                step8List.removeClass('select');

                $('#step8 .mindSuppot').show();
                $('#step8 .wifiSupport').hide();
                $('#step3_2').hide();
                step5.show();
                step5beforeTxt.show();
                step5ListAll.hide();
                step8.show();

                step7PlanList = $('#content #step7 .planList').hide();
                step7PlanVoiceSim = $('#content #step7 .voiceSim').show();
                $('#content .resultArea .costArea .costMonth .mindSuppot').show();
                $('#content .resultArea .costArea .costMonth .wifiSuppot').hide();
                $('#content .resultArea .costArea .costMonth .unlimitSuppot').hide();

                stepAll.addClass('stepOff');
                step1.removeClass('stepOff');
                step2.removeClass('stepOff');
                step2_2.removeClass('stepOff');
                $('.endBtn').addClass('stepOff');
                $('.resultArea .costArea .btnArea').addClass('stepOff');
                
                $('#step4 h3').removeClass('num6').addClass('num5');
                break;
            case step3List:
                step3Status = "";
                step3_2Status = "";
                step4Status = "";
                step4SimStatus = "";
                step5Status = "";
                step6Status = "";
                step7Status = "";
                step8UnlimitStatus = "";
                step8Status = "";

                step3Num = 0;
                step4Num = 0;
                step6Num = 0;
                step7Num = 0;
                step8UnlimitNum = 0;
                step8Num = 0;

                step3List.removeClass('select');
                step3_2List.removeClass('select');
                step4List.removeClass('select');
                step4SimList.removeClass('select');
                step5List.removeClass('select');
                step6List.removeClass('select');
                step7List.removeClass('select');
                //step8UnlimitList.removeClass('select');
                step8List.removeClass('select');

                step7PlanList = $('#content #step7 .planList').hide();
                step7PlanVoiceSim = $('#content #step7 .voiceSim').show();
                $('#content .resultArea .costArea .costMonth .unlimitSuppot').hide();

                stepAll.addClass('stepOff');
                step1.removeClass('stepOff');
                step2.removeClass('stepOff');
                step2_2.removeClass('stepOff');
                step3.removeClass('stepOff');
                $('.endBtn').addClass('stepOff');
                $('.resultArea .costArea .btnArea').addClass('stepOff');
                break;
            case step3_2List:
                step3_2Status = "";
                step4Status = "";
                step4SimStatus = "";
                step5Status = "";
                step6Status = "";
                step7Status = "";
                step8UnlimitStatus = "";
                step8Status = "";

                step4Num = 0;
                step6Num = 0;
                step7Num = 0;
                step8UnlimitNum = 0;
                step8Num = 0;

                step3_2List.removeClass('select');
                step4List.removeClass('select');
                step4SimList.removeClass('select');
                step5List.removeClass('select');
                step6List.removeClass('select');
                step7List.removeClass('select');
                //step8UnlimitList.removeClass('select');
                step8List.removeClass('select');

                // step7PlanList = $('#content #step7 .planList').hide();
                // step7PlanVoiceSim = $('#content #step7 .voiceSim').show();
                $('#content .resultArea .costArea .costMonth .unlimitSuppot').hide();

                stepAll.addClass('stepOff');
                step1.removeClass('stepOff');
                step2.removeClass('stepOff');
                step2_2.removeClass('stepOff');
                step3.removeClass('stepOff');
                step3_2.removeClass('stepOff');
                $('.endBtn').addClass('stepOff');
                $('.resultArea .costArea .btnArea').addClass('stepOff');
                break;
            case step4List:
                step4Status = "";
                step4SimStatus = "";
                step5Status = "";
                step6Status = "";
                step7Status = "";
                step8UnlimitStatus = "";
                step8Status = "";

                step4Num = 0;
                step6Num = 0;
                step7Num = 0;
                step8UnlimitNum = 0;
                step8Num = 0;

                step4List.removeClass('select');
                step4SimList.removeClass('select');
                step5List.removeClass('select');
                step6List.removeClass('select');
                step7List.removeClass('select');
                //step8UnlimitList.removeClass('select');
                step8List.removeClass('select');
                step8.find('.mindSuppot').show();
                step8.find('.wifiSupport').hide();
                step5.show();

                stepAll.addClass('stepOff');
                step1.removeClass('stepOff');
                step2.removeClass('stepOff');
                step2_2.removeClass('stepOff');
                step3.removeClass('stepOff');
                step3_2.removeClass('stepOff');
                step4.removeClass('stepOff');
                $('.endBtn').addClass('stepOff');
                $('.resultArea .costArea .btnArea').addClass('stepOff');
                break;
            case step4SimList:
                step4Status = "";
                step4SimStatus = "";
                step5Status = "";
                step6Status = "";
                step7Status = "";
                step8UnlimitStatus = "";
                step8Status = "";

                step4Num = 0;
                step6Num = 0;
                step7Num = 0;
                step8UnlimitNum = 0;
                step8Num = 0;

                step4List.removeClass('select');
                step4SimList.removeClass('select');
                step5List.removeClass('select');
                step6List.removeClass('select');
                step7List.removeClass('select');
                //step8UnlimitList.removeClass('select');
                step8List.removeClass('select');

                stepAll.addClass('stepOff');
                step1.removeClass('stepOff');
                step2.removeClass('stepOff');
                step2_2.removeClass('stepOff');
                step3.removeClass('stepOff');
                step3_2.removeClass('stepOff');
                step4.removeClass('stepOff');
                step4Sim.removeClass('stepOff');
                $('.endBtn').addClass('stepOff');
                $('.resultArea .costArea .btnArea').addClass('stepOff');
                $('#content .resultArea .costArea .costMonth .unlimitSuppot').hide();
                break;
            case step5List:
                step5Status = "";
                step6Status = "";
                step7Status = "";
                step8UnlimitStatus = "";
                step8Status = "";

                step6Num = 0;
                step7Num = 0;
                step8UnlimitNum = 0;
                step8Num = 0;

                step5List.removeClass('select');
                step6List.removeClass('select');
                step7List.removeClass('select');
                //step8UnlimitList.removeClass('select');
                step8List.removeClass('select');

                stepAll.addClass('stepOff');
                step1.removeClass('stepOff');
                step2.removeClass('stepOff');
                step2_2.removeClass('stepOff');
                step3.removeClass('stepOff');
                step3_2.removeClass('stepOff');
                step4.removeClass('stepOff');
                step5.removeClass('stepOff');
                $('.endBtn').addClass('stepOff');
                $('.resultArea .costArea .btnArea').addClass('stepOff');
                break;
            case step6List:
                step6Status = "";
                step7Status = "";
                step8UnlimitStatus = "";
                step8Status = "";

                step6Num = 0;
                step7Num = 0;
                step8UnlimitNum = 0;
                step8Num = 0;

                step6List.removeClass('select');
                step7List.removeClass('select');
                //step8UnlimitList.removeClass('select');
                step8List.removeClass('select');

                stepAll.addClass('stepOff');
                step1.removeClass('stepOff');
                step2.removeClass('stepOff');
                step2_2.removeClass('stepOff');
                step3.removeClass('stepOff');
                step3_2.removeClass('stepOff');
                step4.removeClass('stepOff');
                step5.removeClass('stepOff');
                step6.removeClass('stepOff');
                $('.endBtn').addClass('stepOff');
                $('.resultArea .costArea .btnArea').addClass('stepOff');
                break;
            case step7List:
                step7Status = "";
                step8UnlimitStatus = "";
                step8Status = "";

                step7Num = 0;
                step8UnlimitNum = 0;
                step8Num = 0;

                step7List.removeClass('select');
                step8List.removeClass('select');

                stepAll.addClass('stepOff');
                step1.removeClass('stepOff');
                step2.removeClass('stepOff');
                step2_2.removeClass('stepOff');
                step3.removeClass('stepOff');
                step3_2.removeClass('stepOff');
                step4.removeClass('stepOff');
                step4Sim.removeClass('stepOff');
                step5.removeClass('stepOff');
                step6.removeClass('stepOff');
                step7.removeClass('stepOff');
                //step8UnlimitList.removeClass('select');
                $('.endBtn').addClass('stepOff');
                $('.resultArea .costArea .btnArea').addClass('stepOff');
                break;
            /*case step8UnlimitList:
                step8UnlimitStatus = "";

                step8UnlimitNum = 0;

                step8UnlimitList.removeClass('select');
                break;*/
            case step8List:
                step8Status = "";

                step8Num = 0;

                step8List.removeClass('select');
                $('.resultArea .costArea .btnArea').addClass('stepOff');
                break;
        }
    }


    /*--------------------------------

        winSize

    --------------------------------*/
    var winMode;
    function winSize(){
        var winSize1 = $('.winSize').css('display');
        if(winSize1 === 'none'){
            winMode = 'ds';
        }else {
            winMode = 'sp';
        }
    }

    /*--------------------------------

        separate

    --------------------------------*/
    function separate(num){
        return String(num).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    }

});