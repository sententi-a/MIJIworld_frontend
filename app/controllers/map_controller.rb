class MapController < ApplicationController
    def worldmap
        @pins = Pin.all
    end
end
