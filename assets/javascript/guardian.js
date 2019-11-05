$(document).ready(function (){


let queryURL = "https://content.guardianapis.com/search?q=breweries&api-key=633aec89-5021-4996-9f22-c733936a76d9"



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
    })





})