$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/loginfeature.feature");
formatter.feature({
  "name": "To validate the login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "to verify user can enter with valid email id and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user has to enter the invalid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user has to click search",
  "keyword": "And "
});
formatter.step({
  "name": "user has to navigate to the login page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "naveen",
        "12345"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has to open facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Fbloginsteps.user_has_to_open_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "to verify user can enter with valid email id and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user has to enter the invalid \"naveen\" and \"12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "Fbloginsteps.user_has_to_enter_the_invalid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to click search",
  "keyword": "And "
});
formatter.match({
  "location": "Fbloginsteps.user_has_to_click_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to navigate to the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Fbloginsteps.user_has_to_navigate_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});