Feature: Verify links on the landing page when logged out

    Background:
        Given I open the site "/"

    @14101
    Scenario: Verify Contact us link in header when logged out
        #When i click on the contact us link in the header
        When I click on the link "Contact us"
        #Then the contact us page is displayed
        Then I expect the url to contain "/contact"
        And I expect that the title contains "Contact us"

    @14102
    Scenario: Verify Safeguarding link in header when logged out
        #When i click on the safeguarding link in the header
        When I click on the link "Safeguarding"
        #Then the safeguarding page is displayed
        Then I expect the url to contain "/safeguarding"
        And I expect that the title contains "Report a safeguarding incident"

    @14103
    Scenario: Verify Sign in link in header when logged out
        #When i click on the sign in link in the header
        When I click on the link "Sign in"
        #Then the login page is displayed
        Then I expect the url to contain "/user/login"
        And I expect that the title contains "Sign in"

    @14104
    Scenario: Verify Accessibility statement link in footer when logged out
        #When i click on the accessibility statement link in the footer
        When I click on the link "Accessibility statement"
        #Then the accessibility statement page is displayed
        Then I expect the url to contain "/accessibility-statement"
        And I expect that the title contains "Accessibility statement for the Turing Scheme Portal"

    @14105
    Scenario: Verify Cookies link in footer when logged out
        #When i click on the cookies link in the footer
        When I click on the link "Cookies"
        #Then the cookie policy page is displayed
        Then I expect the url to contain "/cookies"
        And I expect that the title contains "Cookie Policy"

    @14106
    Scenario: Verify Privacy Notice link in footer when logged out
        #When i click on the Privacy notice link in the footer
        When I click on the link "Privacy notice"
        #Then the Privacy notice page is displayed
        Then I expect the url to contain "/privacy-notice"
        And I expect that the title contains "Privacy Notice for the Turing Scheme"

    @14107
    Scenario: Verify Open Government Licence link navigation
        #When i click on the Open Government Licence link in the footer
        When I click on the link "Open Government Licence v3.0"
        #Then the Privacy notice page is displayed
        Then I expect that the url is "https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
        And I expect that the title contains "Open Government Licence"

    @14108
    Scenario: Verify Find out if you can register for the Turing Scheme link
        When I click on the element "#edit-help > summary > span.govuk-details__summary-text"
        And I click on the link "Find out if you can register for the Turing Scheme."
        Then I expect the url to contain "/eligibility"
        And I expect that the title contains "Are you applying as a legal entity?"

    @14131
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

    @14132
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

