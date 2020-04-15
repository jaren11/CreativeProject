document.getElementById("search").addEventListener("click", function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;

  name = name.replace(" ", "%20");

  var sort = document.getElementById('state').value

  var state = document.getElementById('sort').value;

  if (name === "")
    return;
  console.log(name);
  let url = "https://api.data.charitynavigator.org/v2/Organizations?app_id=7d03619f&app_key=f1fb0d396d1432517352d80d320a2e60&pageSize=20&search=" + name + "&state=" + state + "&sort=" + ;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      for (let i=0; i < json.length; i++){
        results += '<div class="results"><h2>Name of charity: ' + json[i].charityName + '</h2>';
        if(json[i].tagLine === null){
          results += '<p>No Charity Tagline :(</p>'
        }else{
          results += '<h3>Charity tagline: ' + json[i].tagLine + '</h3>'
        }
        if(json[i].mission === null){
          results += '<p>No Charity Mission :(</p><br>'
        }else{
          results += '<p>Charity Mission: ' + json[i].mission + "</p><br></div>"
        }

      }

      document.getElementById("result").innerHTML = results;
    });
});
