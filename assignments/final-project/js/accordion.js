	$(function(){
        $('.bikestuff > li').hover(function(){
                                    $(this).addClass('openSesame');
                                    }, function(){
            //this executes when the mouse leaves the list item
            $(this).removeClass('openSesame');
        })
	})