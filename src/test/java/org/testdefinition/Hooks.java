package org.testdefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	@Before(order=1)
	public void startime() {
		System.out.println("launching 1");
	}
	@Before(order=2)
	public void startime1() {
		System.out.println("launching 2");
	}
	@Before(order=3)
	public void startime2() {
		System.out.println("launching 3");
	}
	@After(order=1)
	public void endtime() {
	System.out.println("completed 1");
	}
	@After(order=2)
	public void endtime1() {
	System.out.println("completed 2");
	}
	@After(order=3)
	public void endtime2() {
	System.out.println("completed 3");
	}

}
