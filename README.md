## To Be Updated for Protractor - Cucumber framework

How to prepare local environment for execution of integration tests

1. Install IntelliJ IDEA with Node JS plugin
    1. Request additional software from application delivery agent
    2. Find IntelliJ IDEA software and install it
    3. Install Node JS plugin for IntelliJ IDEA from https://plugins.jetbrains.com/idea/plugin/6098-nodejs

2. Install Maven and configure it
    1. Request additional software from application delivery agent
    2. Find Maven software with version higher than 3.2 and install it
    3. In your username folder find the hidden folder .m2
    4. Edit the settings.xml file according the confluence guide: https://confluence.gslb.db.com/display/CRIT/Maven+configuration+for+artifactory

3. Clone Bit-bucket project repository to local hard drive
    1. Clone repository to your local hard drive
    2. Add project to the IntelliJ IDEA

4. Configure project build in IntelliJ IDEA - Maven plugin
    1. Add a new configuration in IntelliJ IDEA: Run -> Edit configurations -> + -> Maven
    2. Fill accordingly: Tab Parameters
        Name: Whatever you want (example: CLA build only)
        Working directory: Path to the cloned project folder (example: C:/Users/<username>/Projects/cla-integration-tests)
        Command line: clean verify -DskipTests
        Profiles: e2e
    3. Fill accordingly: Tab General
        Maven home directory: path to the maven installation folder (example: C:/Program Files/apache-maven-3.2.3)
        User settings file: path to the maven settings.xml file (example: C:\Users\<username>\.m2\settings.xml)
        Local repository: path to the local maven repository folder (example: C:\Users\<username>\.m2\repository)
        Make sure override checkbox are checked for "User settings file" and "Local repository" options
    4. Fill accordingly: Tab Runner
        JRE: path to the java JDK 64 bit installation folder (example: C:\Program Files\Java\jdk1.8.0_101\)
        Note: make sure you are using 64 bit JDK installation!!!

5. Build project using the new configuration
    1. Select the prepared configuration and trigger it
    2. Look at the console report for results
    3. In case of any error contact somebody from CLA Test Automation team
    4. If everything will be ok build will finish with message: BUILD SUCCESS

6. Configure NPM repository settings
    1. In your username folder find the hidden file .npmrc
    2. Edit the file that it will contain following line: registry=http://lonplcrsasappd10.uk.db.com:8091/repository/npm-all

7. Configure execution trigger in in IntelliJ IDEA - Node JS plugin
    1. Add a new configuration in IntelliJ IDEA: Run -> Edit configurations -> + -> Node.js
    2. Fill accordingly: Tab Configuration
        Name: Whatever you want (example: CLA execute tests)
        Node interpreter: Path to the node.exe file (example: C:\Users\<username>\Projects\cla-integration-tests\node\node.exe)
        Working directory: Path to the cloned project folder (example: C:/Users/<username>/Projects/cla-integration-tests)
        Javascript file: Relative path to the cli.js file (example: src\test\node_modules\protractor\built\cli.js)
        Application parameters: Path to the protractor.conf file (example: C:\Users\<username>\Projects\cla-integration-tests\src\test\protractor.conf.js)

8. Prepare Selenium server and browser drivers
    1. Create a new folder under your user folder that will contain all binaries
    2. Download the binaries from Confluence page and place them all to the create folder: https://confluence.gslb.db.com/pages/viewpage.action?pageId=403440645
    3. Run the run_selenium_server.cmd file (command line interface should open and at the end of the message there should be a line: Selenium server is up and running

9. Start tests on your local environment
    1. Run the Node.js configuration from IntelliJ IDEA to trigger the protractor tests
    2. For any issues contact the CLA Test Automation team