Feature: Ecommerce validations
  #Scenario Outline is to Parameterize

  @Validation
  Scenario Outline: Placing an order successfully
    Given the user logs into the application2 with incorrect "<username>" and "<password>"
    Then the user should see an error message

    Examples:
      | username         | password     |
      | andhre2@test.com | 12345678Aa*q |
      | andhre1@test.com |  12345678Aa* |

  @Regression
  Scenario: Placing an order successfully
    Given the user logs into the application with "andhre2@test.com" and "12345678Aa*"
    When an item is added to the cart
    Then the product should be displayed in the cart
    When the user enters valid details and places the order
    Then the order should be present in the Order History page
