var breweries;
var lat;
var long;

$(document).ready(function() {
    $(".row").hide();
    $("#add-brew").on("click", function(event) {

        event.preventDefault();
        $("#brewery").empty();
        $(".row").show();
        
        let userName = "&by_name=" + $("#brewery-name").val().trim();
        let userState = "&by_state=" + $("#state").val().trim();
        let userCity = "&by_city=" + $("#city").val().trim();
        $("#brewery-name").val("");
        $("#state").val("");
        $("#city").val("");
        let queryURL = "https://api.openbrewerydb.org/breweries?per_page=20";
        if (userName === "&by_name=") {
            userName = "";
        }
        if (userCity === "&by_city=") {
            userCity = ""
        }
        if (userState === "&by_state=") {
            userState = ""
        }
        if (userCity === "&by_city=" && userName === "&by_state=") {
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
        if (userName === "" && userCity === "" && userState === "") {
            alert("Please fill out at least 1 parameter");
            return false;
        }

        $.ajax({
            url: queryURL + userName + userState + userCity,
            method: "GET"
        }).then(function(response) {


            if (Array.isArray(response) && !response.length) {
                alert("Search term not found");
                return false;
            }

            breweries = response;
            console.log(breweries);
            for (let i = 0; i < response.length; i++) {
                let brewRow = $("<div class='row'>");
                let brewDiv = $("<div>");
                let mapDiv = $("<div id='map" + i + "'>")
                mapDiv.addClass("map");
                let name = $("<h3>").text(response[i].name);
                name.attr("data-lat", response[i].latitude);
                name.attr("data-long", response[i].longitude);
              

                let brewCity = $("<p>").text(response[i].city);
                let brewState = $("<p>").text(response[i].state);
                let address = $("<p>").text(response[i].street);
                let zip = $("<p>").text(response[i].postal_code);
                let website = $("<a href=''>").text(response[i].website_url);
                let phone = $("<p>").text(response[i].phone);
                let lat = response[i].latitude;
                let long = response[i].longitude;
                console.log(lat);
                console.log(long);
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

                $(brewRow).append(brewDiv);
                $(brewRow).append(mapDiv);
                $("#brewery").append(brewRow);

                let platform = new H.service.Platform({
                    "app_id": "dyibLlBU2QNaCv7xikm2",
                    "apikey": "5nf_6CsIndRsth2qYd4s86AwOQs8XMDgUf7vOLU09Ls"
                });
                let maptypes = platform.createDefaultLayers();

                let map = new H.Map(
                    document.getElementById("map" + i),
                    maptypes.vector.normal.map, {
                        zoom: 10,
                        center: { lat: lat, lng: long },
                    }
                );
                
                const mapEvents = new H.mapevents.MapEvents(map);
                const behavior = new H.mapevents.Behavior(mapEvents);
                let svgMarkup = '<svg width="24" height="24" ' +
                    'xmlns="http://www.w3.org/2000/svg">' +
                    '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
                    'height="22" /><text x="12" y="18" font-size="12pt" ' +
                    'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
                    'fill="white">H</text></svg>';
                let icon = new H.map.Icon(svgMarkup),
                    coords = { lat: lat, lng: long },
                    marker = new H.map.Marker(coords, { icon: icon });
                map.addObject(marker);
                map.setCenter(coords);

            };
        });
    });


<<<<<<< HEAD
    $("#breweries-go-here").on("click",".brw-btn", function () {
        console.log("is this working")
        $("#breweries-go-here").hide();
        $("#map").show();
        console.log("clicked");
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
                center: { lat: 37, lng: -121 }
            }
        );
        const geocoderService = platform.getGeocodingService();
            geocoderService.geocode(
                {
                    "searchtext": "Los Banos, CA"
                },
                success => {
                    console.log(success);
                },
                error => {
                    console.error(error);
                }
            )
        const mapEvents = new H.mapevents.MapEvents(map);
        const behavior = new H.mapevents.Behavior(mapEvents);
        console.log("clicked")
    });


})

=======
});


>>>>>>> 488cbe3c67c4b524f8a4df35cd38aecffc29e009
