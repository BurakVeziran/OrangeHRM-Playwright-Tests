Feature: Dashboard Page

  As a user
  I want to test
  Create Employee Report

  Background:
    Given I am on the dashboard screen

  Scenario: As a admin I should be able to create employee report
    And I Open PIM page
    And Create an employee report
    Then Employee report should open

