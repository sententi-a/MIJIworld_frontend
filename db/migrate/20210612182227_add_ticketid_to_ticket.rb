class AddTicketidToTicket < ActiveRecord::Migration[6.1]
  def change
    add_column :tickets, :ticketid, :text
  end
end
