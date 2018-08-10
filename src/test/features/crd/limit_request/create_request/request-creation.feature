Feature: Create new Limit Request

    @crd @limit_request @create_request @workflow
    Scenario: Front Officer should be able to create a new Limit Request
        Given User is logged in CRD as: "FRONT_OFFICER_1"
        When User creates a new Limit Request for cpty id: "21"
        Then Request status is displayed in application as: "INITIATED"
