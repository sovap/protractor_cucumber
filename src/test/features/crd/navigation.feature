Feature: Navigation through Credit Risk Desktop application screens

    @smoke @crd
    Scenario: User should be able to navigate to Credit Risk Desktop application
        Given User is authenticated against web sso as: "FRONT_OFFICER_1"
        When User navigate to web application Credit Risk Desktop
        Then Web application Credit Risk Desktop is correctly loaded

