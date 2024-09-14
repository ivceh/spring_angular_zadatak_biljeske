package com.example.spring_zadatak_biljeske;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication ( exclude = {SecurityAutoConfiguration.class} )
public class SpringZadatakBiljeskeApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringZadatakBiljeskeApplication.class, args);
    }

}
