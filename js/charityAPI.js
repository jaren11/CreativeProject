document.getElementById("search").addEventListener("click", function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  name = name.replace(" ", "%20");
  var state = document.getElementById('state').value;

  if (name === "")
    return;
  console.log(name);
  let url = "https://api.data.charitynavigator.org/v2/Organizations?app_id=7d03619f&app_key=f1fb0d396d1432517352d80d320a2e60&pageSize=20&search=" + name + "&state=" + state;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      for (let i=0; i < json.length; i++){
        results += '<div class="resultsIndividual comment"><h2>' + json[i].charityName + '</h2>';
        results += '<h4>' + json[i].mailingAddress.streetAddress1 + ", " + json[i].mailingAddress.city + ", " + json[i].mailingAddress.stateOrProvince + '</h4>';
        if(json[i].tagLine === null){
          results += '<p>No Charity Tagline :(</p>'
        }else{
          results += '<p>Charity tagline: ' + json[i].tagLine + '</p>';
        }
        if(json[i].mission === null){
          results += '<p>No Charity Mission :(</p><br></div>';
        }else{
          results += '<p>Charity Mission: ' + json[i].mission + "</p><br></div>";
        }
      }

      document.getElementById("result").innerHTML = results;
    });
});
