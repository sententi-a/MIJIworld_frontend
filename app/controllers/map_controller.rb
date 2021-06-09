class MapController < ApplicationController
    def worldmap
        @pins = Pin.all
        @restinfos = Restinfo.all
    end
end
