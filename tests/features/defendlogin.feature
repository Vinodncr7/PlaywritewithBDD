Feature: Login to the defend application

  Scenario: Open Defend Application
    Given I launch the browser
    When I go to "https://defend.cloudsaas-qa.oci-phx.a10networks.com"
    Then I should see the title contains "A10 Networks"
    Then Enter Organization Name "donotdeleteautomation"