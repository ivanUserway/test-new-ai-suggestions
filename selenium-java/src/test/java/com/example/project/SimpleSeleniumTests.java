package com.example.project;

import lombok.SneakyThrows;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import static org.assertj.core.api.Assertions.assertThat;

class SimpleSeleniumTests {

	@Test
	@SneakyThrows
	public void test() {

		ChromeOptions options = new ChromeOptions();
		options.addArguments("--headless");

		WebDriver driver = new ChromeDriver(options);

		driver.get("http://localhost:1342/");

		Thread.sleep(2000);

		String pageTitle = driver.getTitle();

		assertThat(pageTitle).contains("Mirko");
	}
}
