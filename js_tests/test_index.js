    describe("states", function() {
      it ("populate popup with states", function() {
        App.listStates();

        waitsFor( function(){
          return App.states !== null;
          }, 200, 'GET /states fails');

        runs( function(){
          expect($('#popup option').length).toEqual(3);
          });
      });

    });
