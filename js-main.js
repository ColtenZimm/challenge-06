requirejs({
  baseUrl: './javascripts',
  paths: {
      'jquery': '../lib/bower_components/jquery/dist/jquery.min',
      'lodash': '../lib/bower_components/lodash/lodash.min',
      'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
      'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
      'firebase': '../lib/bower_components/firebase/firebase',
      'q': '../lib/bower_components/q/q'
  },
  shim: {
      'bootstrap': ["jquery"]
  }
});


function requirejs() {

    ["jquery", "hbs", "bootstrap", "templates", "userAuth", "q", "firebase", "getWeather", "zipCheck"],
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

}};