class ChangeSomeName < ActiveRecord::Migration[6.1]
  def change
    rename_column :restinfos, :eatsay2, :rest_kor

  end
end
