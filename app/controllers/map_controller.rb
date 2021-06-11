class MapController < ApplicationController
    def worldmap
        @pins = Pin.all
        @restinfos = Restinfo.all
    end
    
    def ticket
        @ticket = Ticket.new(ticket_params)
        
        
        redirect_to "/map#modal1"
    end

private 
    def ticket_params
        params.require(:ticket).permit(:datepick, :name, :with, :menu, :anything)
    end
end
