$("form").on("submit", function (event) {
    event.preventDefault();
    var inputElement = document.querySelector("input");
    var inputValue = inputElement.value;

    var request = $.ajax({
            url: "http://api.tvmaze.com/search/shows?q=" + inputValue,
            method: "GET"
        }

    );

    request.done(function (listOfShows) {

        for (var i = 0; i < listOfShows.length; i++) {
            var currentShow = listOfShows[i];

            var sHow = currentShow.show.name;
            var picture = currentShow.show.image.original;


            //     $("img").append(picture);
            //     console.log(picture);
            //     $("a").append(sHow);
            //     console.log(sHow);
            //  $("row").append("<img picture>");
            //  $("row").append("sHow");


        }
    })

});

$(function () {
    loadPopularShows();
});

function loadPopularShows() {
    var request = $.ajax({
        url: "http://api.tvmaze.com/shows",
        method: "GET"
    });

    request.done(function (listOfShows) {

        console.log(listOfShows);

        let $row = $('.row');
        for (var i = 0; i < 50; i++) {
            var currentShow = listOfShows[i];

            var sHow = currentShow.name;
            var picture = currentShow.image.medium;

            var html = `<div class="col-sm-12 col-md-6 col-lg-4"><img src="${picture}"><p><a href="#" data-show-id="${currentShow.id}">${sHow}</a></p></div>`;
            $row.append(html);
        }
    })
}