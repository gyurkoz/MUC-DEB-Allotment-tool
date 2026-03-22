package com.lhsystems.booking.web.configuration;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.test.util.ReflectionTestUtils;

class CorsConfigTest {

    @Test
    void corsConfigurationSource_shouldCreateSource() {
        var config = new CorsConfig();
        ReflectionTestUtils.setField(
                config,
                "allowedOrigins",
                List.of("http://localhost:3000", "http://localhost:5173"));
        ReflectionTestUtils.setField(
                config,
                "allowedOriginPatterns",
                List.of());

        var source = config.corsConfigurationSource();

        assertNotNull(source);
    }

    @Test
    void corsConfigurationSource_shouldAcceptOriginPatterns() {
        var config = new CorsConfig();
        ReflectionTestUtils.setField(
                config,
                "allowedOrigins",
                List.of("http://localhost:3000"));
        ReflectionTestUtils.setField(
                config,
                "allowedOriginPatterns",
                List.of("https://*.app.github.dev"));

        var source = config.corsConfigurationSource();

        assertNotNull(source);
    }
}
