var App = App || {};
App.states = null;
App.listStates = function() {
  $.getJSON( '/states' ).done( function(data) {
    App.states = data;
    var $popup = $("<select id='popup'></select>");
    App.states.forEach( function(state) {
      $popup.append('<option>' + state + '</value>');
    });
    $('body').append($popup);
    console.log($("#popup option").length);
  });
}
