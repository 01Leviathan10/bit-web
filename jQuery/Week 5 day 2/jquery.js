$(function(){

    var images = [
        "https://websitesetup.org/wp-content/uploads/2017/02/Jquery-Logo.png",
        "http://jquery.eisbehr.de/lazy/images/fb.jpg",
        "https://i.ytimg.com/vi/fEYx8dQr_cQ/maxresdefault.jpg"
    ];
    var box = $("<div>");
    $('body').append(box);
    for (var i = 0; i < images.length; i++) {
        var element = images[i];
        var slika = $("<img>");
        slika.attr("src", element);
    
        $('div').append(slika);
    }


    
       
});