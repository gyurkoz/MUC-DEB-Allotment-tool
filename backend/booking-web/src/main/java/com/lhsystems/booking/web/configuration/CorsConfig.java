package com.lhsystems.booking.web.configuration;

import java.util.List;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration

public class CorsConfig {

    @Value("${cors.allowed-origins:http://localhost:3000,http://localhost:5173}")
    private List<String> allowedOrigins;

    @Value("${cors.allowed-origin-patterns:}")
    private List<String> allowedOriginPatterns;

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        var configuration = new CorsConfiguration();
        allowedOrigins.forEach(configuration::addAllowedOrigin);
        allowedOriginPatterns.forEach(configuration::addAllowedOriginPattern);
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("Authorization", "Content-Type", "Accept"));
        configuration.setAllowCredentials(true);

        var source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
