$("#add-brew").on("click", function(event){
    event.preventDefault();
    let userName = $("#brewery-name").val().trim();
    let userCity = $("#city").val().trim();
    let userState = $("#state").val().trim();
    
    
    
    $.ajax({
    url:  "https://api.openbrewerydb.org/breweries?by_city=" +userCity,
    method: "GET"
    }).then(function(response){
        console.log(response)
        
        
    
        for( let i = 0; i < response.length; i++){
    
        
       
    let brewDiv = $("<div>");
    
    let name = $("<p>").text(response[i].name);
    let brewCity = $("<p>").text(response[i].city);
    let brewState = $("<p>").text(response[i].state);
    let address = $("<p>").text(response[i].street);
    let zip = $("<p>").text(response[i].postal_code);
    let website = $("<p>").text(response[i].website_url);
    let phone = $("<p>").text(response[i].phone);
    brewDiv.addClass("brewery-div");
    
    brewDiv.append(name);
    brewDiv.append(brewCity);
    brewDiv.append(brewState);
    brewDiv.append(address);
    brewDiv.append(zip);
    brewDiv.append(website);
    brewDiv.append(phone);
    
    $("#breweries-go-here").append(brewDiv);
        }
    console.log(name)
    })
    
    })