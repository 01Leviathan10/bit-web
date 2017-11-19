

// $("#button").on("click",function (){
//     var output = $("#log");
//     var ip = $("#ip").val();
//     var request = $.ajax({
//         url: "http://freegeoip.net/xml/" +ip,
//         method: "GET",
//         dataType: "xml"
//      });

//      // request.done(function(xmlStructure){
//      //     $("#log").html(xmlStructure);
//      // });

//      request.done(function( msg ){
//          $CountryCode = $(msg).find("CountryCode").text();
//          output.text("Country is " + $CountryCode);
//      });
// })




// $("#button").on("click",function (){
//     var output = $("#log");
//     var ip = $("#ip").val();
//     var request = $.ajax({
//         url: "http://freegeoip.net/json/" +ip,
//         method: "GET",
//         dataType: "json"
//      });

//      request.done(function( msg ){
//          $CountryCode = msg.country_code;
//          output.text("Country is " + $CountryCode);
//      });
// })


$("#button").on("click", function () {
    var output = $("#log");
    var ip = $("#ip").val();
    var request = $.ajax({
        url: "https://api.github.com/search/users?q=" + ip,
        method: "GET",
        dataType: "json"
    });

    request.done(function (msg) {
        console.log(msg);
        $User = msg.items[0].login;
        output.text("User is " + $User);
    });
})