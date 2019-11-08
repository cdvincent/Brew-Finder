$("#factsTitle").hide();
$("#factsText").hide();
    
    $("#beerTypes").on("click", function() {
        $("#beerTypesText").show();
        $("#factsTitle").hide();
        $("#beerTypesTitle").show();
        $("#factsText").hide();
        $("#beerButtons").show();
        
    });

    $("#facts").on("click", function() {
        $("#factsText").show();
        $("#factsTitle").show();
        $("#beerTypesTitle").hide();
        $("#beerTypesText").hide();
        $("#beerButtons").hide();
    });
    
    var beerTypes = ["Brown Ales", "India Pale Ales", "Pale Ales", "Strong Ales", "Dark Lagers", "Pilseners and Pale Lagers", "Porters", "Stouts", "Belgian Styles", "Wheat Beers", "Wild/Sour Beers",];

    var beerSum = ["Brown ale is a style of beer with a dark amber or brown colour. The term was first used by London brewers in the late 17th century to describe their products, such as mild ale, though the term has a rather different meaning today. 18th century brown ales were lightly hopped and brewed from 100% brown malt.", "India pale ale (IPA) is a hoppy beer style within the broader category of pale ale. The export style of pale ale, which had become known as India pale ale, developed in England around 1840, later became a popular product there.", "Pale ale is a top-fermented beer made with predominantly pale malt. The highest proportion of pale malts results in a lighter colour. The term first appeared around 1703 for beers made from malts dried with high-carbon coke, which resulted in a lighter colour than other beers popular at that time.", "Strong ale is a type of ale, usually above 5% abv and often higher, between 7% to 11% abv, which spans a number of beer styles, including old ale, barley wine and Burton ale. Strong ales are brewed throughout Europe and beyond, including in England, Belgium and the United States.", "Lagers would likely have been mainly dark until the 1840s; pale lagers were not common until the later part of the 19th century when technological advances made them easier to produce. Dark lagers typically range in color from amber to dark reddish brown, and may be termed Vienna, amber lager, dunkel, tmavé, or schwarzbier depending on region, color or brewing method.", "The most common lager beers in worldwide production are pale lagers. The flavor of these lighter lagers is usually mild, and the producers often recommend that the beers be served refrigerated.", "Porter is a dark style of beer developed in London from well-hopped beers made from brown malt. The name was first recorded in the 18th century, and is thought to come from its popularity with street and river porters, who carried objects for others.", "Stout is a dark, top-fermented beer with a number of variations, including dry stout, Baltic porter, milk stout, and imperial stout. The first known use of the word stout for beer was in a document dated 1677 found in the Egerton Manuscripts, the sense being that a stout beer was a strong beer, not a dark beer.", "Belgian beers are primarily ales (as opposed to lagers) with a heavy emphasis on malts and a lot of fruity yeast flavors.", "Wheat beer is a beer, usually top-fermented, which is brewed with a large proportion of wheat relative to the amount of malted barley.", "Sour beer is beer which has an intentionally acidic, tart or sour taste. The most common sour beer styles are Belgian lambics, gueuze and Flanders red ale."]

for (let i = 0; i < beerTypes.length; i++) {
    $("<button>").addClass("btn btn-outline-light btn-dark").attr("id", "beerBtn").text(beerTypes[i]).attr("data", beerTypes[i]).appendTo("#beerButtons");
}

$(document.body).on("click", "#beerBtn", function (){
    $("#beerDescription").empty();
    let currentBeer = $(this).attr("data");
    switch(currentBeer) {
        case "Brown Ales":
            $("#beerDescription").append("<img src='assets/images/amber-ale.jpg' id='aboutImg'>").append(beerSum[0]);
            break;
        case "India Pale Ales":
            $("#beerDescription").append("<img src='assets/images/india-pale-ale.jpg' id='aboutImg'>").append(beerSum[1]);
            break;
        case "Pale Ales":
            $("#beerDescription").append("<img src='assets/images/brown-ale.jpg' id='aboutImg'>").append(beerSum[2]);
            break;
        case "Strong Ales":
            $("#beerDescription").append("<img src='assets/images/strong-ale.jpg' id='aboutImg'>").append(beerSum[3]);
            break;
        case "Dark Lagers":
            $("#beerDescription").append("<img src='assets/images/dark-lager.jpg' id='aboutImg'>").append(beerSum[4]);
            break;
        case "Pilseners and Pale Lagers":
            $("#beerDescription").append("<img src='assets/images/pilsner-beer.jpg' id='aboutImg'>").append(beerSum[5]);
            break;
        case "Porters":
            $("#beerDescription").append("<img src='assets/images/porter-beer.jpg' id='aboutImg'>").append(beerSum[6]);
            break;
        case "Stouts":
            $("#beerDescription").append("<img src='assets/images/stout-beer.jpg' id='aboutImg'>").append(beerSum[7]);
            break;
        case "Belgian Styles":
            $("#beerDescription").append("<img src='assets/images/belgian-style.jpg' id='aboutImg'>").append(beerSum[8]);
            break;
        case "Wheat Beers":
            $("#beerDescription").append("<img src='assets/images/wheat-beer.jpg' id='aboutImg'>").append(beerSum[9]);
            break;
        case "Wild/Sour Beers":
            $("#beerDescription").append("<img src='assets/images/sour-beer.jpg' id='aboutImg'>").append(beerSum[10]);
            break;
    }
});