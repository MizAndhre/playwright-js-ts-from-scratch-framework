# Feature: Ecommerce validations
#   Scenario: Placing an order
#     Given the user logs into the application with "andhre2@test.com" and "12345678Aa*"
#     When an item is added to the Cart 
#     Then verify the product is display in the Cart
#     When Enter valid details and place the order
#     Then Verify order is present in the OrderHistory page
#
Feature: Ecommerce validations

  @Regression
  Scenario: Placing an order successfully
    Given the user logs into the application with "andhre2@test.com" and "12345678Aa*"
    When an item is added to the cart
    Then the product should be displayed in the cart
    When the user enters valid details and places the order
    Then the order should be present in the Order History page


