// gets a new object, notice no need for 'new' keyword
var g = G$('John', 'Doe');

// chainable methods
g.greet().setLang('es').greet(true).log();

// let's use our object on the click of the login button
$('#login').click(function() {
  var loginGrtr = G$('John', 'Doe');
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});