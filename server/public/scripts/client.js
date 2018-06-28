console.log('working')

$(document).ready(readyNow);

function readyNow() {
    console.log('jquery is loaded');
    loadQuotesList();
}

function loadQuotesList() {
    $.ajax({
        url: '/famousQuotes',
        type: 'GET'
    })
    .done(function (response) {
        for (i = 0; i < response.length; i++) {
            $('#quotesList').append(`<li>"${response[i].quote}"</li>`)
            $('#quotesList').append(`<br><li class = "author">${response[i].author}</li><br>`)
        }
    })
    .fail(function(errorResponse){
        alert('request failed error' + errorResponse.status)
    })
}