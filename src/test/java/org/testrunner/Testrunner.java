package org.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources",
				glue="org.testdefinition",
				monochrome=true,tags= {"@Smoke"},
				plugin={"pretty",
				"html:src\\test\\resources\\Reports\\HTML",
				"junit:src\\test\\resources\\Reports\\XML\\loginpage.xml",
				"json:src\\test\\resources\\Reports\\Json\\fbloginpage.xml"
				})
public class Testrunner {
}
