$(document).ready(function() {
    // 메뉴클릭과 마우스휠을 이용한 스크롤 페이지 효과 함수
    var scrollHeight = $(window).height() ;
    var scrollNum=0; // 마우스 휠로 페이지 전환을 위한 변수 
    var pageNum = 7;  // 페이지 수 - 1
    var resizeNum=0
    
    function move(){
        $("html,body").stop(true).animate({scrollTop: scrollHeight*(resizeNum)}, 600);
    } // 컨트롤 클릭과 마우스 휠 이벤트 시 화면이 이동하는 애니메이션
    
    $('.box').css('height',scrollHeight); // 주요 div의 높이를 window의 높이와 맞춰줌
    $('#business>ul>li').css('height',scrollHeight);
    $('#menu').css('height',scrollHeight);
    $('.leftBg').css('height',scrollHeight);

    $('#sideNav>ul>li').each(function(index){
        $(this).attr('data-index', index);
        $(this).click(function(){  // 메뉴 클릭 효과   	
            scrollNum=index;  // 메뉴의 넘버와 동기화
            resizeNum=index;
            move()	;	 
            $(this).addClass('select').siblings().removeClass('select')	;
        })	
    })

    // 마우스 휠로 페이지 이동
    $('.box').on('mousewheel DOMMouseScroll', function(e){ 
        // wheel down
        if($("html,body").is(':animated')==false){ 
            // 애니메이션 진행 중이 아닐 경우만 실행
            if(e.originalEvent.wheelDelta>0){       
            scrollNum-=1
            if(scrollNum<0){
                scrollNum=0
            } // wheel up                    
            }else{     
                scrollNum+=1
                if(scrollNum>pageNum){
                    scrollNum=pageNum
                }
            }                
            resizeNum=scrollNum
            move()
            $('#sideNav>ul>li').eq(scrollNum).addClass('select').siblings().removeClass()
            return false;
        }
    }) 

    // 브라우져 크기 변화시 화면크기 변화
    $(window).resize(function(){
        scrollHeight = $(window).height()
        $('.box').css('height',scrollHeight);
        $('#business>ul>li').css('height',scrollHeight);
        $('#menu').css('height',scrollHeight);
        $('.leftBg').css('height',scrollHeight);
        move(resizeNum)
    })

    // gnb
    function headerBg(){
        $('#header').css('background-color','#fff').css('height',60).css('border-bottom','1px solid #666')
        $('#header>.gnb>ul>li>a').css('line-height','60px').css('color','#111')
        $('#header .logo').css('top','7px')
        $('#header .logo>a>img').attr('src','img/logo.png')
        $('#header .util').css('top',15)
        $('#header .util>li:nth-child(1)>button').css('background-image','url(img/icon.png)')
        $('#header .util>li:nth-child(2)>button').css('background-image','url(img/icon.png)')
        $('#header .util>li:nth-child(3) div').css('background-color','#111').parent().find('span').css('color','#111')
    }
    function headerBgReset(){
        $('#header').css('background-color','initial').css('height',80).css('border-bottom','none')
        $('#header>.gnb>ul>li>a').css('line-height','80px').css('color','#fff')
        $('#header .logo').css('top','17px')
        $('#header .logo>a>img').attr('src','img/logo_white.png')
        $('#header .util').css('top','25px')
        $('#header .util>li:nth-child(1)>button').css('background-image','url(img/icon_white.png)')
        $('#header .util>li:nth-child(2)>button').css('background-image','url(img/icon_white.png)')
        $('#header .util>li:nth-child(3) div').css('background-color','#fff').parent().find('span').css('color','#fff')
    }
    var winScroll = $(window).scrollTop()
    $(window).scroll(function(){
        winScroll = $(window).scrollTop()
        if(winScroll>0){
            headerBg()
        }else{
            headerBgReset()
        }
    })
    $('#header>.gnb').mouseenter(function(){
        $('.gnbBg').stop().slideDown(200)
        headerBg()
    })
    $('#header>.gnb').mouseleave(function(){
        $('.gnbBg').stop().slideUp(200)
        if(winScroll>0){
            headerBg()
        }else{
            headerBgReset()
        }
    })
    $('#header>.gnb>ul>li').mouseenter(function(){
        $(this).find('.subMenu').stop().slideDown(500)
    })
    $('#header>.gnb>ul>li').mouseleave(function(){
        $(this).find('.subMenu').css('display','none')
    })
    $('#header>.gnb>ul>li').each(function(index){
        $(this).mouseenter(function(){
            $('.gnbBg').css('background-image','url(img/sub_menu'+index+'.jpg)')
        })
    })
    var langNum = 0
    $('.lang').click(function(){
        langNum++
        if(langNum%2==1){
            $(this).find('div').stop().slideDown(300)
        }else{
            $(this).find('div').stop().slideUp(300)
        }
    })

    var menuNum = 0
    $('.menuBtn').click(function(){
        menuNum++
        if(menuNum%2==1){
            $('#menu').fadeIn(500)
            $('#menu .menuBtn').find('div').eq(0).css('transform','rotate(45deg)').css('margin-bottom',-1).end().eq(1).css('transform','rotate(-45deg)').css('margin-bottom',4)
        }else{
            $('#menu').fadeOut(500)
            $('#menu .menuBtn').find('div').eq(0).css('transform','rotate(0deg)').css('margin-bottom',8).end().eq(1).css('transform','rotate(0)').css('margin-bottom',21)
        }
    })

    //footer
    var selectNum = 0
    $('#footer .family>a').click(function(){
        event.preventDefault()
        selectNum++
        if(selectNum%2==1){
            $(this).css('background-color','#fff').css('color','#111').text('패밀리 사이트 -')
            $(this).parent().find('ul').fadeIn(300)
        }else{
            $(this).css('background-color','initial').css('color','#fff').text('패밀리 사이트 +')
            $(this).parent().find('ul').fadeOut(300)
        }
    })
    $('#footer .family>ul>li>a').click(function(){
        e.stopPropagation()
    })
})