Feature: Dashboard Page

  As a user
  I want to test
  Dashboard menu search

  Scenario: As a user I should be able search in menus
    Given I am on the dashboard screen
    And I write Performance in search
    Then Only performance menu button is should be visible
