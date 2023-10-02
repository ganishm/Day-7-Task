var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function (){
  var result = JSON.parse(req.response);
  const res = result.filter(country => country.region === 'Asia');
    
    const res1 = res.map(country => country.name.common);
    console.log(res1);
}