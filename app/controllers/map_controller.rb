class MapController < ApplicationController
    def worldmap
        @pins = Pin.all
        @restinfos = Restinfo.all
        #@restid = params[:restid]
    end

    def ticket
        @ticket = Ticket.new(ticket_params)
        sibal = @ticket.ticketid
        temp_img = MiniMagick::Image.open(Rails.root.join('app', 'assets', 'images', 'restaurant', sibal,'ticket@2x.png'))
        img_width = temp_img[:width]
        temp_img.combine_options do |c|

            c.gravity 'Center'
            c.draw "text -363, -47'#{@ticket.datepick}'"

            c.gravity 'Center'
            c.draw "text 360, -133 '#{@ticket.name}'"

            c.gravity 'Center'
            c.draw "text 360, -65 '#{@ticket.with}'"

            c.gravity 'Center'
            c.draw "text 360, 0 '#{@ticket.menu}'"

            c.gravity 'Center'
            c.draw "text 360, 70 '#{@ticket.anything}'"

            c.stroke('#000000')
            c.strokewidth 1
            c.fill('#000000')
            c.size "#{img_width}x"
            c.pointsize '20'
            c.font "NotoSansCJKkr-Light.otf"

            c.write("MZworld_Ticket.png")
        end
        send_file 'MZworld_Ticket.png'

    end

    def show_modal
        @restinfo = Restinfo.Find(params[:restid])
    end

    def show_modal_test
        logger.debug "got restid: #{params[:restid]}"

    end

private
    def ticket_params
        params.require(:ticket).permit(:datepick, :name, :with, :menu, :anything, :ticketid)
    end
end
