var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload = function() {
    var result = JSON.parse(req.response);
   result.forEach(function(data) {
     var name  = data.name.common;
     var capital = data.capital;
      var flag = data.flag;
      console.log(`Name: ${name},`+  `Capital: ${capital},`+  `Flag: ${flag}`);
      
   })
}