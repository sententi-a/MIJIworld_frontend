require "test_helper"

class StartControllerTest < ActionDispatch::IntegrationTest
  test "should get mainpage" do
    get start_mainpage_url
    assert_response :success
  end
end
