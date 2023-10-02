var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function (){
  var result = JSON.parse(req.response);
  const res = result.reduce ((acc,country)=>acc+country.population,0 );
  console.log(`Total Population: ${res}`);
}