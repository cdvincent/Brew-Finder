var breweries;
var lat;
var long;
$(document).ready(function () {

    

    $("#add-brew").on("click", function (event) {
        event.preventDefault();
        $("#breweries-go-here").empty();
        $("#map").empty();
        let userName = "&by_name=" + $("#brewery-name").val().trim();
        let userState = "&by_state=" + $("#state").val().trim();
        let userCity = "&by_city=" + $("#city").val().trim();
        
        let queryURL = "https://api.openbrewerydb.org/breweries?per_page=10";
        if (userName === "&by_name="){
            userName = "";
        }
        if (userCity === "&by_city="){
            userCity = ""
        }
        if (userState === "&by_state=") {
            userState = ""
        }
        if (userCity === "&by_city=" && userName === "&by_state="){
            userCity = ""
            userState = ""
        }
        if (userState === "&by_state=" && userName === "&by_name=") {
            userName = "";
            userState = "";
        }
        if (userCity === "&by_city=" && userState === "&by_state=") {
            userCity = "";
            userState = "";
        }
        if(userName === "" && userCity === "" && userState === ""){
                alert("Please fill out at least 1 parameter");
                return  false;
            }

            $.ajax({
                url: queryURL + userName + userState + userCity,
                method: "GET"
            }).then(function (response) {
                if (Array.isArray(response) && !response.length) {
                    alert("Search term not found");
                    return false;
                } 
    
    
    

                breweries = response;
                console.log(breweries);
                


                for (let i = 0; i < response.length; i++) {



                    let brewDiv = $("<div>");
                    let mapDiv = $("<div>")
                    let name = $("<button>").text(response[i].name);
                    name.attr("data-lat", response[i].latitude);
                    name.attr("data-long", response[i].longitude);

                    let brewCity = $("<p>").text(response[i].city);
                    let brewState = $("<p>").text(response[i].state);
                    let address = $("<p>").text(response[i].street);
                    let zip = $("<p>").text(response[i].postal_code);
                    let website = $("<p>").text(response[i].website_url);
                    let phone = $("<p>").text(response[i].phone);
                    let lat = (response[i].latitude);
                    let long = (response[i].longitude);
                    
                    brewDiv.addClass("brewery-div");
                    name.addClass("brw-btn");
                    brewDiv.append(name);
                    brewDiv.append(brewCity);
                    brewDiv.append(brewState);
                    brewDiv.append(address);
                    brewDiv.append(zip);
                    brewDiv.append(website);
                    brewDiv.append(phone);
                    brewDiv.append(lat);
                    brewDiv.append(long);
                    $("#breweries-go-here").append(brewDiv);
                    $("#breweries-go-here").append(mapDiv);
                    let platform = new H.service.Platform({
                        "app_id": "dyibLlBU2QNaCv7xikm2",
                        "apikey": "5nf_6CsIndRsth2qYd4s86AwOQs8XMDgUf7vOLU09Ls"
                    });
                    let maptypes = platform.createDefaultLayers();
        
                    let map = new H.Map(
                        document.getElementById("map"),
                        maptypes.vector.normal.map,
                        {
                            zoom: 10,
                            center: { lat: lat, lng: long }
                        }
                        
                    );
                };  

            });

    });
});

    