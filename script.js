function onClick(e) {
debugger;
  e.preventDefault();
  // get form values
  let s = document.getElementById('selector');
  let category = s.options[s.selectedIndex].value;


  // setup URL
  const url = "https://sv443.net/jokeapi/category/" + category + "/"+ "?format=json";
  // call API
  fetch(url)
    .then(function(response) {
      // make sure the request was successful
      if (response.status != 200) {
        return {
          text: "Error calling the Numbers API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      // update DOM with response
      if (json.type === "twopart"){
            updateResult(json.setup + " " + json.delivery);
	  }
      else if (json.type === "single"){
        updateResult(json.joke);
      }
    });
}

function updateResult(info) {
  document.getElementById('result').textContent = info;
}

document.getElementById('Joke Time!').addEventListener('click', onClick);