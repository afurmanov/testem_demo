// js_tests/test_index.js

describe("states", function() {
  beforeEach( function() {
    spyOn(App.EndPoints, "getStates").andCallFake( function() {
      var deferred = $.Deferred();
      deferred.resolve(['CA','IL','AL'])
      return deferred.promise();
    });

  });

  it ("populate popup with states", function() {
    App.listStates();

    waitsFor( function(){
      return App.states !== null;
      }, 200, 'GET /states fails');

    runs( function(){
      expect($('#popup option').length).toEqual(3);
      });
  });

  it ("list states", function() {
    App.listStates();
    expect(App.EndPoints.getStates).toHaveBeenCalled();
  });
});
