Feature: Login Page

    As a user 
    I want to test
    Login to OrangeHRM

    Scenario: As a user I should be able to login
      Given I am on the login screen
      And I write the username and password
      And I click login button
      Then I should be logged in
