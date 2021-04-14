const reporter = require('cucumber-html-reporter')
const options = {
    theme: 'bootstrap',
    jsonDir: 'cypress/reports/cucumber-json',
    output: 'cypress/reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    metadata: {
        "App Name": "Demo Automation",
        "Test Environment": "STAGING",
        "Browser": "Electron",
        "Plataform": "Windows 10",
        "Executed": "Local"
    }
};

reporter.generate(options)