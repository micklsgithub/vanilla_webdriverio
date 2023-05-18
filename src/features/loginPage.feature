Feature: Verify links on the landing page when logged out

    Background:
        Given I open the site "/"

    @Test1
    Scenario: Verify Sign In to account unsuccessful
        #When i enter my email and password
        When I add "<email>" to the inputfield "#edit-name"
        And I add "<password>" to the inputfield "#edit-pass"
        # And click submit
        And I click on the button "#edit-submit"
        #Then the relevant error message is displayed
        Then I expect that element ".govuk-error-summary" contains the text "There is a problem"
        And I expect that element ".govuk-error-summary__body" contains the text "Enter a valid email address and password"
        Examples:
            | email                                  | password    |
            | michael.smith4+Invalid@capita.co.uk    | Grantis123  |
            | michael.smith4+1703231018@capita.co.uk | Grantis1234 |

    @Test2
    Scenario: Verify Sign In to account successfully
        #When i enter my email and password
        When I add "<email>" to the inputfield "#edit-name"
        And I add "<password>" to the inputfield "#edit-pass"
        # And click submit
        And I click on the button "#edit-submit"
        #Then the portal dashboard is displayed
        Then I expect the url to contain "check_logged_in"
        Examples:
            | email                                | password   |
            | michael.smith4+1703231018@capita.com | Grantis123 |

