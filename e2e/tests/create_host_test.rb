# frozen_string_literal: true

require_relative '../test_case'

class CreateHostTest < TestCase
  def test_create_host
    driver.get lisa_url

    find_element(name: 'username').send_keys(username)
    find_element(name: 'password').send_keys(password)

    find_element(xpath: '//*[@id="root"]/div/main/div/div/div/div/div[2]/form/div[3]/div/div/button').click

    wait.until { find_element(css: 'h1.dashboard-title') }

    find_element(link_text: 'Create Hosts').click


    wait.until { find_element(tag_name: 'h1', link_text: 'Create Hosts') }

    find_element(css: '.Select-placeholder', text: 'Select Subnet').click
    wait.until { find_element(css: 'div.Select-option[aria-label="SubnetLisa"]') }

    find_element(css: 'div.Select-option[aria-label="SubnetLisa"]').click

    project = SecureRandom.hex(6)
    role = SecureRandom.hex(6)

    find_element(name: 'project').send_keys(project)
    find_element(name: 'role').send_keys(role)

    find_element(css: 'button[type="submit"]').click

    wait.until { find_element(link_text: "#{project}-#{role}-01.development.example.com") }
    assert find_element(link_text: "#{project}-#{role}-01.development.example.com").displayed?
  ensure
    quit
  end
end
