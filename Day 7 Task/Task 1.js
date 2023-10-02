var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function (){
  var result = JSON.parse(req.response);
  var res = result.filter ((ele)=>ele.population<200000);
  var res1 = res.map ((e)=>e.region);
    console.log(res1);
}