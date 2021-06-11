class MapController < ApplicationController
    def worldmap
        @pins = Pin.all
        @restinfos = Restinfo.all
        @datepick = params[:datepick]
        @name = params[:name]
        @with = params[:with]
        @menu = params[:menu]
        @anything = params[:anything]
    end
    
    def ticket
        @datepick = params[:datepick]
        @name = params[:name]
        @with = params[:with]
        @menu = params[:menu]
        @anything = params[:anything]
    end
end
