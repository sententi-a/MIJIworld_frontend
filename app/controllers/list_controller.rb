class ListController < ApplicationController
    def listpage
        @restinfos = Restinfo.all
    end
end