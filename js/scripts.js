function Places() {
    this.placesVisited = [];
    this.currentId = 0;
}

Places.prototype.addCountry = function(country){
    country.id = this.assignId();
    this.placesVisited.push(country);
}

Places.prototype.assignId = function(){
    this.currentId += 1;
    return this.currentId;
}

Places.prototype.findPlace = function(id){
    for(var i = 0; i < this.placesVisited.length; i++){
        if(this.placesVisited[i]){
            if(this.placesVisited[i].id == id){
                return this.placesV[i];
            }
        }
    };
    return false;
}

//business logic
function Country(country, date, city, food) {
    this.country = country;
    this.date = date;
    this.city = city;
    this.food = food;
}

//user interface logic

var place = new Places();

function displayContactDetails(countryToDisplay) {
    var placesList = $("ul#places");
    var htmlForContactInfo = "";
    countryToDisplay.placesVisited.forEach(function(i) {
      htmlForContactInfo += "<li id=" + i.id + ">" + i.country + " " + i.city + " " + i.date + " " + i.food + "</li>";
    });
    placesList.html(htmlForContactInfo);
  };


$(document).ready(function(){
    $("form#places").submit(function(event){
        event.preventDefault();
        var userCountry = $("input#country").val();
        var userCity = $("input#city").val();
        var userDate = $("input#date").val();
        var userFood = $("input#food").val();

        var result = new Country(userCountry, userCity, userDate, userFood);
        place.addCountry(result);
        displayContactDetails(place);


        // Places.prototype.addCountry = function(country){
        //     country.id = this.assignedId();o
        //     this.countries.push(country);
        // }

        // Places.prototype.assignedId = function(){
        //     this.currentId += 1;
        //     return this.currentId;

    // $(".output").text(places.countries[0]);
    // $(".output").text(places.Country);
    });
})