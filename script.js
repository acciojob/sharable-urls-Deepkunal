var form = document.querySelector("form");
var h3 = document.getElementById("url");
var nameELement = document.querySelector("#name");
var yearElement = document.querySelector("#year");
var btn = document.querySelector("#button");

function handleSubmit(event) {
  
  var h3Value = "https://localhost:8080/";
  var name = nameELement.value;
  var year = yearElement.value;

  if (name && year) {
    h3Value += "?name=" + name + "&year=" + year;
  } else if (name && !year) {
    h3Value += "?name=" + name;
  } else if (!name && year) {
    h3Value += "?year=" + year;
  }
  h3.innerText = h3Value;
	//event.preventDefault();
}


form.addEventListener("submit", handleSubmit);