function getJson(http, callback ) {

    $.ajax({
        url:http,
        method: "GET",
        dataType: "json",
        data: {
            
        },
        headers: {}
        
    }).done(callback)
    .fail(function(jqXHR, textStatus, errorThrown){
        console.log("Erreur de récupération");
    });
}


function dataQuotes(){
    $.ajax({ 
        type: 'GET', 
        url: "https://programming-quotes-api.herokuapp.com/quotes/random", 
        data: {}, 
        dataType: 'json',
        success: function (data) { 
            console.log(data.en);
            $('.container-quotes').html('<p>' + data.en + '</p> <footer> <cite id="author" >' + data.author + '</cite> </footer>')
         
            
        }
    });
}