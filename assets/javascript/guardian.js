$(document).ready(function (){


let queryURL = "https://content.guardianapis.com/search?q=breweries&api-key=633aec89-5021-4996-9f22-c733936a76d9&show-fields=thumbnail,headline,shortUrl"



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)

         for( let i = 0; i < response.response.results.length; i++) {

            let pic = response.response.results[i].fields.thumbnail;
            let headline = response.response.results[i].fields.headline;
            
            
            let carouselItem = $("<div class='carousel-item'>");
            if (i === 0) carouselItem.addClass("active");
            let image = $("<img class='d-block w-100'>");
            image.attr("src", pic);
            image.attr("alt", "artical image");
            let caption = $("<div class='carousel-caption d-none d-md-block'>");
            let h5 = $("<h5 class='headline'>").text(headline);
            caption.append(h5);
            carouselItem.append(image);
            carouselItem.append(caption);

        

            $(".carousel-inner").append(carouselItem);
         
        
        
        }

        
      
        

    })





})