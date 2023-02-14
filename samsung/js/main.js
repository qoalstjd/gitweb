$(function(){
    //topBanner
    function bannerGauge(){
        $('#topBanner .bannerGauge').animate({width:'100%'},5000).animate({width:3},1000)
    }
    var bannerNum = 0
    function bannerChange(){
        bannerNum++
        if(bannerNum>3){
            bannerNum=0
        }
        $('.bannerText>li').eq(bannerNum).fadeIn(500).siblings().fadeOut(500)
        $('#topBanner').css('background-image','url(img/banner'+bannerNum+'.jpg)')
        $('.bannerNum').html(bannerNum+1)
        bannerGauge()
    }
    bannerGauge()
    auto = setInterval(bannerChange,6000)
    $('#topBanner .stopBtn').click(function(){
        $(this).fadeOut(500).siblings().fadeIn(500)
        $('.bannerGauge').stop()
        clearInterval(auto)
    })
    $('#topBanner .playBtn').click(function(){
        $(this).fadeOut(500).siblings().fadeIn(500)
        bannerGauge()
        clearInterval(auto)
        auto = setInterval(bannerChange,6000)
    })

    //management
    $('.policy>li').each(function(index){
        $(this).mouseenter(function(){
            $('video').css('opacity','0')
            $('#management').css('background-image','url(img/ope'+index+'.jpg)')
        })
        $(this).mouseleave(function(){
            $('video').css('opacity','1')
            $('#management').animate({backgroudImage:none},500)
        })
    })

    //business
    $('#business>ul>li').click(function(){
        $(this).addClass('select').siblings().removeClass('select')
        $(this).find('img').fadeIn(300).end().siblings().find('img').fadeOut(300)
        $(this).find('a').fadeIn(300).end().siblings().find('a').fadeOut(300)
    })

    // global
    var documentWidth = $(window).width()
    if(documentWidth>900){
        $('.content>div>ul>li').click(function(){
            event.preventDefault()
            var imgSrc = $(this).attr('data-src')
            var h = $(this).attr('data-h5')
            var p = $(this).attr('data-p')
            $('.infoBox>.textBox').find('img').attr('src',imgSrc)
            $('.infoBox>.textBox').find('h5').html(h)
            $('.infoBox>.textBox').find('p').html(p)
            $('.infoBox').appendTo(this).fadeIn(300)
            $(this).parents('div').find('li').removeClass('select')
            $(this).addClass('select')
        })
        $('.infoBox').find('.quit').click(function(){
            event.preventDefault()
            event.stopPropagation()
            $('.infoBox').stop(true).fadeOut(300)
            $('.content>div>ul>li').parents('div').find('li').removeClass('select')
        })
    }else{
        $('.content>div>ul>li').click(function(){
            event.preventDefault()
            var imgSrc = $(this).attr('data-src')
            var h = $(this).attr('data-h5')
            var p = $(this).attr('data-p')
            $('.infoBox>.textBox').find('img').attr('src',imgSrc)
            $('.infoBox>.textBox').find('h5').html(h)
            $('.infoBox>.textBox').find('p').html(p)
            $(this).parents('div').find('li').removeClass('select')
            $(this).addClass('select')
        })
    }

    //news
    var newsNum = 0
    function newsScroll(){
        $('.newsList').animate({marginLeft:-100*newsNum+'%'},500)
        $('.newsGauge').animate({left:33.3333*newsNum+'%'},500)
    }
    $('#news .nextBtn').click(function(){
        newsNum++
        if(newsNum>2){
            newsNum=0
        }
        event.preventDefault()
        newsScroll()
    })
    $('#news .prevBtn').click(function(){
        newsNum--
        if(newsNum<0){
            newsNum=2
        }
        event.preventDefault()
        newsScroll()
    })
    var newsDate = ['11.18','11.05','10.28','10.08','09.29','08.31','08.12','07.19','07.26']
    $('.newsList>li').each(function(index){
        $(this).mouseenter(function(){
            $(this).find('p').text('자세히보기 →').css('color','#9ac6ff')
        })
        $(this).mouseleave(function(){
            $(this).find('p').text('2021.'+newsDate[index]).css('color','#111')
        })
    })
})