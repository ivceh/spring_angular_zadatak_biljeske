package com.example.spring_zadatak_biljeske.config;

import org.springframework.context.annotation.Bean;
import org.springframework.web.filter.CommonsRequestLoggingFilter;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RequestLoggingConfig {

    @Bean
    public CommonsRequestLoggingFilter logFilter() {
        CommonsRequestLoggingFilter filter = new CommonsRequestLoggingFilter();
        filter.setIncludeQueryString(true);
        filter.setIncludePayload(true); // To include request body
        filter.setMaxPayloadLength(1000); // Set payload limit (bytes)
        filter.setIncludeHeaders(true); // Optionally log headers
        filter.setAfterMessagePrefix("HTTP REQUEST DATA: ");
        return filter;
    }
}