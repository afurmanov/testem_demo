     class StatesController < ApplicationController
       def index
         respond_to do |format|
           format.json { render :json => ['CA','IL','AL'] }
           format.html
         end
       end
     end
