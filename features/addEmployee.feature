Feature: Dashboard Page

  As a user
  I want to test
  Dashboard menu search

  Background:
    Given I am on the dashboard screen

  Scenario: As a admin I should be able to add employee
    And I Open PIM page
    And I add a new employee
    Then New employee page with information should open

