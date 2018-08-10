Feature: Navigation through Dashboard application screens

    @smoke @dashboard
    Scenario: User should be able to navigate to Dashboard application - Limit tab
        Given User is authenticated against web sso as: "FRONT_OFFICER_1"
        When User navigate to web application Dashboard tab Limits
        Then Web application Dashboard is correctly loaded
        Then There are no unexpected error popups displayed

    @smoke @dashboard
    Scenario: User should be able to navigate to Dashboard application - Collateral tab
        Given User is authenticated against web sso as: "FRONT_OFFICER_1"
        When User navigate to web application Dashboard tab Collateral
        Then Web application Dashboard is correctly loaded
        Then There are no unexpected error popups displayed

    @smoke @dashboard
    Scenario: User should be able to navigate to Dashboard application - Static data tab
        Given User is authenticated against web sso as: "FRONT_OFFICER_1"
        When User navigate to web application Dashboard tab Static data
        Then Web application Dashboard is correctly loaded
        Then There are no unexpected error popups displayed

    @smoke @dashboard
    Scenario: User should be able to navigate to Dashboard application - Documents tab
        Given User is authenticated against web sso as: "FRONT_OFFICER_1"
        When User navigate to web application Dashboard tab Documents
        Then Web application Dashboard is correctly loaded
        Then There are no unexpected error popups displayed