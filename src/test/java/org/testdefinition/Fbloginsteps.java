package org.testdefinition;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Fbloginsteps {
	static WebDriver driver;
		@Given("user has to open facebook login page")
		public void user_has_to_open_facebook_login_page() {
			System.setProperty("webdriver.chrome.driver", 
			"C:\\Users\\navee.DESKTOP-ND11BA1\\eclipse-workspace\\Cucumber\\Drive\\chromedriver.exe");
			driver =new ChromeDriver();
			driver.get("https://www.facebook.com/");
			driver.manage().window().maximize();   
		}
		
		@When("user has to enter the invalid {string} and {string}")
		public void user_has_to_enter_the_invalid_and(String s1, String s2) {
			driver.findElement(By.id("email")).sendKeys(s1);
		    driver.findElement(By.id("pass")).sendKeys(s2);	     
		}
		@When("user has to click search")
		public void user_has_to_click_search() {
			driver.findElement(By.id("u_0_b")).click();
		}

		@Then("user has to navigate to the login page")
		public void user_has_to_navigate_to_the_login_page() {
		  System.out.println("invalid credentials");
		}



}

	
	