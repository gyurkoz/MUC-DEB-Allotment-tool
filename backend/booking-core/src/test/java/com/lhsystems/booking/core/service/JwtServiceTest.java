package com.lhsystems.booking.core.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class JwtServiceTest {

    private static final String SECRET =
            "test-jwt-secret-key-that-must-be-at-least-256-bits" + "-for-hmac-sha256-signing";
    private static final long EXPIRATION_MS = 86400000;

    private JwtService jwtService;

    @BeforeEach
    void setUp() {
        jwtService = new JwtService(SECRET, EXPIRATION_MS);
    }

    @Test
    void generateToken_shouldReturnNonNullToken() {
        var token = jwtService.generateToken("admin");

        assertNotNull(token);
        assertFalse(token.isBlank());
    }

    @Test
    void extractUsername_shouldReturnCorrectUsername() {
        var token = jwtService.generateToken("admin");

        var username = jwtService.extractUsername(token);

        assertEquals("admin", username);
    }

    @Test
    void isTokenValid_shouldReturnTrue_whenTokenValid() {
        var token = jwtService.generateToken("admin");

        assertTrue(jwtService.isTokenValid(token));
    }

    @Test
    void isTokenValid_shouldReturnFalse_whenTokenInvalid() {
        assertFalse(jwtService.isTokenValid("invalid.token.here"));
    }

    @Test
    void isTokenValid_shouldReturnFalse_whenTokenExpired() {
        var shortLivedService = new JwtService(SECRET, 0);
        var token = shortLivedService.generateToken("admin");

        // Token expires immediately (0ms expiration)
        assertFalse(shortLivedService.isTokenValid(token));
    }

    @Test
    void isTokenValid_shouldReturnFalse_whenTokenNull() {
        assertFalse(jwtService.isTokenValid(null));
    }

    @Test
    void constructor_shouldThrow_whenSecretTooShort() {
        assertThrows(IllegalArgumentException.class, () -> new JwtService("short", EXPIRATION_MS));
    }
}
