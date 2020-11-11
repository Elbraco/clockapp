// AJAX
// https://www.pierre-giraud.com/jquery-apprendre-cours/creation-requete-ajax/
//url : URL de la requête
//method :  Permet de préciser la méthode d’envoi de la requête (GET, POST ou plus rarement PUT, DELETE, etc.) ;
//dataType : Le type de données qu’on attend en réponse du serveur. Par défaut, jQuery examinera le type MIME de la réponse si aucun type de données n’est spécifié ;
//data : Contient les données à envoyer au serveur. Si ces données ne sont pas au format chaine de caractères, elles seront converties en chaine ;
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
