Feature: Example feature

    @example
    Scenario: Example for steps with parameters
        Given Step without parameters
        When Step with one parameter "value1"
        Then Step with multiple parameters "value1", "value2", and "value3"
        And Step with comparison against table
            | value1 | value2 | value3 |
            | value4 | value5 | value6 |
            | value7 | value8 | value9 |

    @example
    Scenario: Example for failed step
        Given Precondition is met
        When Action is executed
        Then Validation failed

    @example
    Scenario: Example for database validation
        Given Precondition is met
        When Action is executed
        Then Query result is correct