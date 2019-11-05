$(document).ready(function () {

    $("#map").hide();

    $("#add-brew").on("click", function (event) {
        event.preventDefault();
        let userName = "by_name=" + $("#brewery-name").val().trim();
        let userCity = "by_city=" + $("#city").val().trim();
        let userState = "by_state=" + $("#state").val().trim();


        if(userName == "" && userCity == "" && userState == ""){
            prompt("Must fill out at least 1 parameter");
        } else

        $.ajax({
            url: "https://api.openbrewerydb.org/breweries?" + userCity,
            method: "GET"
        }).then(function (response) {
            console.log(response);

        // //     $.ajax({
        // //         url: "https://api.openbrewerydb.org/breweries?by_state=" + userState,
        // //         method: "GET"
        // //     }).then(function (response) {
        // //         console.log(response);

        //         $.ajax({
        //             url: "https://api.openbrewerydb.org/breweries?" + userName || userCity || userState,
        //             method: "GET"
        //         }).then(function (response) {
        //             console.log(response);



            for (let i = 0; i < response.length; i++) {



                let brewDiv = $("<div>");

                let name = $("<button>").text(response[i].name);
                let brewCity = $("<p>").text(response[i].city);
                let brewState = $("<p>").text(response[i].state);
                let address = $("<p>").text(response[i].street);
                let zip = $("<p>").text(response[i].postal_code);
                let website = $("<p>").text(response[i].website_url);
                let phone = $("<p>").text(response[i].phone);
                brewDiv.addClass("brewery-div");
                name.addClass("brw-btn");
                brewDiv.append(name);
                brewDiv.append(brewCity);
                brewDiv.append(brewState);
                brewDiv.append(address);
                brewDiv.append(zip);
                brewDiv.append(website);
                brewDiv.append(phone);

                $("#breweries-go-here").append(brewDiv);
            };

        });

    });
    //     });
    // });


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

