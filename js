

function weatherApp() {

  var apiKey = "87698b85f315acbeb3085f389d2fb89b";

  return {
    searchWeather: function(zipCode) {
      var deferred = $.Deferred();
      var url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&APPID=" + apiKey;
      $.ajax({url: url})
        .done(function(json_data){
          console.log(json_data);
          deferred.resolve(json_data);
        }).fail(function(xhr,status,error){
          console.log("Error: " + error);
          deferred.reject(error);
        });
      return deferred.promise();
    }
  };
}

