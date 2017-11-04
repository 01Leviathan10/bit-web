$("klik").on("click", function (event) {
    var inputElement = document.querySelector("input");
    var inputValue = inputElement.value;

    var request = $.ajax({
            url: "http://api.tvmaze.com/search/shows?q=" + inputValue,
            method: "GET"
        }

    );



});