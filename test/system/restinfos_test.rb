require "application_system_test_case"

class RestinfosTest < ApplicationSystemTestCase
  setup do
    @restinfo = restinfos(:one)
  end

  test "visiting the index" do
    visit restinfos_url
    assert_selector "h1", text: "Restinfos"
  end

  test "creating a Restinfo" do
    visit restinfos_url
    click_on "New Restinfo"

    fill_in "Address", with: @restinfo.address
    fill_in "Continent", with: @restinfo.continent
    fill_in "Eatsay1", with: @restinfo.eatsay1
    fill_in "Eatsay2", with: @restinfo.eatsay2
    fill_in "Flag", with: @restinfo.flag
    fill_in "Font", with: @restinfo.font
    fill_in "Googleurl", with: @restinfo.googleurl
    fill_in "Header", with: @restinfo.header
    fill_in "Kakaourl", with: @restinfo.kakaourl
    fill_in "Mapurl", with: @restinfo.mapurl
    fill_in "Menu1exp1", with: @restinfo.menu1exp1
    fill_in "Menu1exp2", with: @restinfo.menu1exp2
    fill_in "Menu1price", with: @restinfo.menu1price
    fill_in "Menu2exp1", with: @restinfo.menu2exp1
    fill_in "Menu2exp2", with: @restinfo.menu2exp2
    fill_in "Menu2price", with: @restinfo.menu2price
    fill_in "Menu3exp1", with: @restinfo.menu3exp1
    fill_in "Menu3exp2", with: @restinfo.menu3exp2
    fill_in "Menu3price", with: @restinfo.menu3price
    fill_in "Namemenu1", with: @restinfo.namemenu1
    fill_in "Namemenu2", with: @restinfo.namemenu2
    fill_in "Namemenu3", with: @restinfo.namemenu3
    fill_in "Naverurl", with: @restinfo.naverurl
    fill_in "Openwhen", with: @restinfo.openwhen
    fill_in "Ratersgoogle", with: @restinfo.ratersgoogle
    fill_in "Raterskakao", with: @restinfo.raterskakao
    fill_in "Ratersnaver", with: @restinfo.ratersnaver
    fill_in "Ratinggoogle", with: @restinfo.ratinggoogle
    fill_in "Ratingkakao", with: @restinfo.ratingkakao
    fill_in "Ratingnaver", with: @restinfo.ratingnaver
    fill_in "Restexp1", with: @restinfo.restexp1
    fill_in "Restexp2", with: @restinfo.restexp2
    fill_in "Restkind", with: @restinfo.restkind
    fill_in "Restname", with: @restinfo.restname
    click_on "Create Restinfo"

    assert_text "Restinfo was successfully created"
    click_on "Back"
  end

  test "updating a Restinfo" do
    visit restinfos_url
    click_on "Edit", match: :first

    fill_in "Address", with: @restinfo.address
    fill_in "Continent", with: @restinfo.continent
    fill_in "Eatsay1", with: @restinfo.eatsay1
    fill_in "Eatsay2", with: @restinfo.eatsay2
    fill_in "Flag", with: @restinfo.flag
    fill_in "Font", with: @restinfo.font
    fill_in "Googleurl", with: @restinfo.googleurl
    fill_in "Header", with: @restinfo.header
    fill_in "Kakaourl", with: @restinfo.kakaourl
    fill_in "Mapurl", with: @restinfo.mapurl
    fill_in "Menu1exp1", with: @restinfo.menu1exp1
    fill_in "Menu1exp2", with: @restinfo.menu1exp2
    fill_in "Menu1price", with: @restinfo.menu1price
    fill_in "Menu2exp1", with: @restinfo.menu2exp1
    fill_in "Menu2exp2", with: @restinfo.menu2exp2
    fill_in "Menu2price", with: @restinfo.menu2price
    fill_in "Menu3exp1", with: @restinfo.menu3exp1
    fill_in "Menu3exp2", with: @restinfo.menu3exp2
    fill_in "Menu3price", with: @restinfo.menu3price
    fill_in "Namemenu1", with: @restinfo.namemenu1
    fill_in "Namemenu2", with: @restinfo.namemenu2
    fill_in "Namemenu3", with: @restinfo.namemenu3
    fill_in "Naverurl", with: @restinfo.naverurl
    fill_in "Openwhen", with: @restinfo.openwhen
    fill_in "Ratersgoogle", with: @restinfo.ratersgoogle
    fill_in "Raterskakao", with: @restinfo.raterskakao
    fill_in "Ratersnaver", with: @restinfo.ratersnaver
    fill_in "Ratinggoogle", with: @restinfo.ratinggoogle
    fill_in "Ratingkakao", with: @restinfo.ratingkakao
    fill_in "Ratingnaver", with: @restinfo.ratingnaver
    fill_in "Restexp1", with: @restinfo.restexp1
    fill_in "Restexp2", with: @restinfo.restexp2
    fill_in "Restkind", with: @restinfo.restkind
    fill_in "Restname", with: @restinfo.restname
    click_on "Update Restinfo"

    assert_text "Restinfo was successfully updated"
    click_on "Back"
  end

  test "destroying a Restinfo" do
    visit restinfos_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Restinfo was successfully destroyed"
  end
end
