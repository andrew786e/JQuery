(function(){

    "use strict"
    const List_Items = document.querySelectorAll('ul li ul') ;


    // Hide the sub menus of the lists
    for(var i = 0 ; i < List_Items.length ; i++){
        List_Items[i].className = "hide-menu" ;
    }

    var Menu_Click_Handler = document.querySelectorAll('.menulink') ;

    for(var i = 0 ; i < Menu_Click_Handler.length ; i++){

        Menu_Click_Handler[i].addEventListener('click' , function(event){

            event.preventDefault() ;

            var thisMenu = this.parentNode.querySelector('ul') ;

            if(thisMenu.classList.contains("hide-menu")){
                for(var i = 0 ; i < List_Items.length ; i++){
                    List_Items[i].className = "hide-menu" ;
                }

                thisMenu.className = "show-menu" ;

            }else{
                thisMenu.className = "hide-menu" ;
            }




        }) ;

    }
})()