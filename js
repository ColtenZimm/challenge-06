define(["jquery", "q"], function($, Q) {

  // var ref = new Firebase("https://bl-weather-app.firebaseio.com/");

  return {
    initialSearch: function(){

      var deferred = Q.defer();
      var zipCode = $("#searchZip").val();
      var searchString = "http://api.openweathermap.org/data/2.5/weather?zip="+zipCode+",us&APPID=87698b85f315acbeb3085f389d2fb89b";

      $.ajax({url:searchString})
        .done(function(json_data){
          console.log(json_data);
          deferred.resolve(json_data);
        }).fail(function(xhr,status,error){
          console.log("error");
          deferred.reject(error);
        });
      return deferred.promise;
    }

  };
});

