(function(){
    // Any of which hides the display in the webpage
    // $('ul li ul').css('display','none') ;
    $('ul li ul').hide() ;

    $('.menulink').click(function(){
        var thisMenu = $(this).next('ul') ;

        // if(thisMenu.is(':visible')){
        // 	thisMenu.hide() ;
        // }else{
        // 	thisMenu.show() ;
        // }


        // Searches for all items in a list that is not this menu and hides them 
        $('ul li ul').not(thisMenu).hide() ;

        thisMenu.toggle() ;
    })
})()