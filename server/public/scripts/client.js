console.log('working')

$(document).ready(readyNow);

function readyNow() {
    console.log('jquery is loaded');
    loadQuotesList();
    $('#submit').on('click',submitQuote);
    
}


function loadQuotesList() {
    $.ajax({
        url: '/famousQuotes',
        type: 'GET'
    })
    .done(function (response) {
        $('#quotesList').empty();
        for (i = 0; i < response.length; i++) {
            $('#quotesList').append(`<li>"${response[i].quote}"</li>`)
            $('#quotesList').append(`<br><li class = "author">${response[i].author}</li><br>`)
        }
    })
    .fail(function(errorResponse){
        alert('request failed error' + errorResponse.status)
    })
}
function submitQuote(){
    let quote = $('#quote').val();
    let author = $('#author').val();
    console.log(quote,author);

    $.ajax({
        url: '/famousQuotes',
        method: 'POST',
        data: {
            quote: quote,
            author: author
        }
    })
    .done(function (response) {
        
        loadQuotesList();
    })
   
   
    
}
