requirejs.config({
  baseUrl: './javascripts',
  paths: {
      'jquery': '../lib/bower_components/jquery/dist/jquery.min',
  },
  shim: {
      'bootstrap': ["jquery"]
  }
});


requirejs(["jquery", "hbs", "bootstrap", "templates", "userAuth", "q", "firebase", "getWeather", "zipCheck"],
    function($, Handlebars, bootstrap, templates, userAuth, q, firebase, getWeather, zipCheck) {

  $("#login").html(templates.login);

  $(document).on("click", "#registerPage", function(e) {
    e.preventDefault();
    $("#login").html(templates.register);
  });

  $(document).on("click", "#loginPage", function(e) {
    e.preventDefault();
    $("#login").html(templates.login);
  });

  $(document).on("click", "#submitRegister", function(e){
    e.preventDefault();
    userAuth.register();
    $("#login").html(templates.login);
  });

  $(document).on("click", "#submitLogin", function(e){
    e.preventDefault();
    userAuth.logIn();
    $("#login").hide();
    $("#initialNav").html(templates.zipcode);
  });

  $(document).on("click", "#searchButton", function(e){
    e.preventDefault();

    zipCheck.zipCheck()
      .then(function(zip){
        getWeather.initialSearch()
          .then(function(day){
            $("#weather1").html(templates.weather1(day));
          });
      });
  });

  $(document).on("click", "#logOut", function(e){
    e.preventDefault();
    userAuth.logOut();
    $("#login").html(templates.login);
  });

});