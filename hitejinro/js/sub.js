$(function(){
    $('.menu').click(function(){
        $('.gnb').fadeIn(500)
        $('.headerLogo').fadeOut(500)
        $(this).fadeOut(500)
    })
    $('.quit').click(function(){
        $('.gnb').fadeOut(500)
        $('.headerLogo').fadeIn(500)
        $('.menu').fadeIn(500)
    })
    $('.gnbInner>.nb>li').on({
        mouseenter:function(){$('.subMenu').stop(true).fadeIn(500)},
        focusin:function(){$('.subMenu').stop(true).fadeIn(500)},
        mouseleave:function(){$('.subMenu').stop(true).fadeOut(500)},
        focusout:function(){$('.subMenu').stop(true).fadeOut(500)}
    })

    var winScroll = $(window).scrollTop()

    var aboutTop = $('#about').offset().top-300
    var storyTop = $('#brand').offset().top-300
    var newsTop = $('#news').offset().top-300
    var commercialTop = $('#commercial').offset().top-300

    $(window).resize(function(){
        aboutTop = $('#about').offset().top-300
        storyTop = $('#brand').offset().top-300
        newsTop = $('#news').offset().top-300
        commercialTop = $('#commercial').offset().top-300
    })

    $(window).scroll(function(){
        winScroll = $(window).scrollTop()
        if(winScroll>0){
            $('.headerLogo').fadeOut(500)
            $('.headerLogoIcon').css('display','block')
            $('.scrollDown').fadeOut(500)
            $('.topBtn').fadeIn(500)
        }else{
            $('.scrollDown').fadeIn(500)
            $('.topBtn').fadeOut(500)
            $('.scrollDown').fadeIn(500)
            $('.headerLogo').fadeIn(500,function(){
                $('.headerLogoIcon').css('display','none')
            })
        }
        if(winScroll>aboutTop){
            $('.aboutWrap>li').each(function(index){
                $(this).delay(index*300).animate({top:0,opacity:1},500)
            })
        }
    })
    $('.headerLogoIcon').on({
        mouseenter:function(){$('.headerLogo').stop(true).fadeIn(500)},
        focusin:function(){$('.headerLogo').stop(true).fadeIn(500)},
        mouseleave:function(){$('.headerLogo').stop(true).fadeOut(500)},
        focusout:function(){$('.headerLogo').stop(true).fadeOut(500)}
    })

    $('.prevBtn').click(function(){event.preventDefault()})
    $('.nextBtn').click(function(){event.preventDefault()})

    function brandNextSlider(){
        $('.brandList>li:first').animate({marginLeft:'-1080px'},500,function(){
            $(this).appendTo('.brandList').css('margin-left',0)
        })
        $('.brandList>li').eq(3).animate({opacity:1},500).siblings().animate({opacity:0.3},500)
        var bgUrl = $('.brandList>li').attr('data-bg')
            $('#brand').css('background-image','url('+bgUrl+')')
    }

    function cfNextSlider(){               
        $('.cfList>li:first').animate({marginLeft:'-255px'},500,function(){
            $(this).css('margin-left',0).appendTo('.cfList')
        })
    }
    function cfPrevSlider(){
        $('.cfList>li:last').prependTo('.cfList').css('margin-left','-255px').animate({marginLeft:0},500)
    }
    
    cfNextSlider()

    $('.tvcf .nextBtn').off().click(function(){   
         cfNextSlider()
         event.preventDefault()
    })

    $('.tvcf .prevBtn').click(function(){        
        cfPrevSlider()
        event.preventDefault()
    })
    
    function printNextSlider(){
        $('.printList>li:first').animate({marginLeft:'-250px'},500,function(){
            $(this).appendTo('.printList').css('margin-left',0)
        })
        $('.printList>li').eq(8).animate({width:250,marginTop:0,marginRight:80,marginLeft:40},500).siblings().animate({width:150,marginTop:137,marginRight:40,marginLeft:0},500)
    }
    
    function printPrevSlider(){
        $('.printList>li:last').prependTo('.printList').css('margin-left','-250px').animate({marginLeft:0},500)
        $('.printList>li').eq(7).animate({width:250,marginTop:0,marginRight:80,marginLeft:40},500).siblings().animate({width:150,marginTop:137,marginRight:40,marginLeft:0},500)
    }
    
    printNextSlider()
   
    $('.print .nextBtn').click(function(){   
        printNextSlider()
    })

    $('.print .prevBtn').click(function(){        
        printPrevSlider()
    })

    // about
    $('.historyList>li>a').click(function(){
        event.preventDefault()
        })
    $('.historyList>li').click(function(){
        $(this).addClass('select')
        $(this).siblings().removeClass('select')
    })
})