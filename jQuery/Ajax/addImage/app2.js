$("#button").on("click", function(e){
    e.preventDefault();
    
    var output = $("#log");
    var ip = $("#ip").val();
    var request = $.ajax({
        url: "https://api.github.com/search/users?q=" + ip,
        method: "GET",
        dataType: "json"
    });
    request.done(function(response) {
        console.log(response);
        var element = [];
       for (var i = 0; i < response.items.length; i++) {
            element = response.items[i];
            $("div.element").html();
           
       }

    })
})

