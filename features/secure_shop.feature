Feature: Secure Shop Functionality

  Scenario: User buys a product and logs out
    Given I am on the SauceDemo login page
    When I login with "standard_user" and "secret_sauce"
    Then I should see the products page
    When I add an item to the cart
    Then the cart badge should display "1"
    When I logout
    Then I should see the login page
