# frozen_string_literal: true

require 'forwardable'
require 'minitest/autorun'
require 'selenium-webdriver'
require 'securerandom'
require 'pry'

class TestCase < Minitest::Test
  extend Forwardable

  private

  def_delegators :driver, :get, :find_element, :quit, :page_source, :execute_script,
    :manage, :save_screenshot

  def driver
    @driver ||= begin
      options = Selenium::WebDriver::Chrome::Options.new
      options.add_argument('--headless')
      options.add_argument('--no-sandbox')
      options.add_argument('--disable-dev-shm-usage')

      Selenium::WebDriver.for(:chrome, options: options)
    end
  end

  def wait(timeout = 60)
    Selenium::WebDriver::Wait.new(timeout: timeout)
  end

  def lisa_url
    @lisa_url ||= ENV.fetch('LISA_URL', 'http://localhost:8080')
  end

  def username
    @username ||= ENV.fetch('USERNAME', 'admin')
  end

  def password
    @password ||= ENV.fetch('PASSWORD', 'password')
  end

  # https://blog.francium.tech/take-screenshot-using-ruby-selenium-webdriver-b18802822075
  def save_full_page_screenshot(path = "screenshots/#{SecureRandom.uuid}.png")
    width  = execute_script("return Math.max(document.body.scrollWidth, document.body.offsetWidth, document.documentElement.clientWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth);")
    height = execute_script("return Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);")
    manage.window.resize_to([width+100, 1500].min, [height+100, 3000].min)
    save_screenshot(path)
  end
end
