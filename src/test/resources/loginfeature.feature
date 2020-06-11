Feature: To validate the login functionality  
Background: 
Given user has to open facebook login page 
@Smoke 
	Scenario Outline: to verify user can enter with valid email id and password
	When user has to enter the invalid "<username>" and "<password>"
	And  user has to click search 
	Then user has to navigate to the login page 

Examples:
|username|password|
|naveen|12345|

@Sanity
	Scenario Outline: to verify user can enter with valid email id and password
	When user has to enter the invalid "<username>" and "<password>"
	And  user has to click search 
	Then user has to navigate to the login page 
	
	Examples:
 |username|password|
 |lakshmanan|12345|
 
 @Regression
 Scenario Outline: to verify user can enter with valid email id and password
	When user has to enter the invalid "<username>" and "<password>"
	And  user has to click search 
	Then user has to navigate to the login page 
	Examples:
	
 |username|password|
 |naveenlakshmanan|12345|