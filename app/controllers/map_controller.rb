class MapController < ApplicationController
    def worldmap
        @pins = Pin.all
        @restinfos = Restinfo.all
        #@restid = params[:restid]
    end
    
    def ticket
        @ticket = Ticket.new(ticket_params)
        
        
        redirect_to "/map#modal1"
    end

    def show_modal
        @restinfo = Restinfo.Find(params[:restid])
    end

    def show_modal_test
        logger.debug "got restid: #{params[:restid]}"
        
    end

private 
    def ticket_params
        params.require(:ticket).permit(:datepick, :name, :with, :menu, :anything)
    end
end
