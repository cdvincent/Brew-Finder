<h1>BrewFinder</h1>

<h4>Link</h4>
<p>https://cdvincent.github.io/Brew-Finder/index.html</p>

<h4>Technology used</h4>
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Bootstrap</li>
    <li>Javascript</li>
    <li>Jquery</li>
    <li>OpenBreweryDb API</li>
    <li>HERE Maps API</li>
    <li>Guardian API</li>
</ul>

<h2>Description</h2>
<p>BrewFinder is an application that finds local breweries as its main functionality. The user can search the OpenBreweryDb API by City, State, or the Breweries name, and the API will return all relevant results. The API call will return each found brewery's name, city, state, address, phone number, website URL, and a map of where the brewery is located. As a few additional features, there is a carousel on the Home page with relevant beer information that the user can click on to read, as well as a "Learn More" page that provides information about different types of beers and some fun facts about beer.</p>

<h2>Development</h2>
<p>The search function uses an HTML form to gather user input, and plugs it into the query URL before making an ajax GET call to the OpenBreweryDb API. The results are displayed via a For loop, and a new div is dynamically created with Jquery for each result. The latitude and longitude of the brewery is plugged into the Here maps API and is centered depending on the latitude and longitude for each brewery. The Learn More page uses Jquery to show and hide the proper beer description for the Beer Types button. It also hides that div when the Fun Facts button is clicked and shows the hard coded fun facts.</p>