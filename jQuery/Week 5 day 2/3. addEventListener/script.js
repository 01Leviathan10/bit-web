// function movePlayer(event) {
//     var player = document.querySelector('#player');
//     var playerElmentDisplacement = player.width / 2;
        
//     player.style.top = (event.y - playerElmentDisplacement) + "px";
//     player.style.left = (event.x - playerElmentDisplacement) + "px";
// }

// function stopMoving() {
//     body.removeEventListener('click', movePlayer);
// }

// var body = document.querySelector('body');
// var stopMovingButton = document.querySelector('#stop-moving');

// body.addEventListener('click', movePlayer);
// stopMovingButton.addEventListener('click', stopMoving);
$(function(){
    var $body = $('body');
    var $img = $('#player');
    var $button = $('#stop-moving');
    var playerElmentDisplacement = $img.width() / 2;

    

    $('body').on('click', function(event) {
        $img.css({
            "top": (event.clientY - playerElmentDisplacement) + "px", 
            "left": (event.clientX - playerElmentDisplacement) + "px"
        });
    });

    $button.on('click',function(){
           $body.off('click');
  
    });
    $('body').on('click', function(event) {
        $img.animate({
            left: "250px",
            height: "+=50px",
            width: "+=50px"
        },500);
    });
    
});