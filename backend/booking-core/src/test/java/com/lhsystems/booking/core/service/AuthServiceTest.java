package com.lhsystems.booking.core.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.lhsystems.booking.core.exception.AuthenticationException;
import com.lhsystems.booking.core.mapper.UserMapper;
import com.lhsystems.booking.persistence.entity.User;
import com.lhsystems.booking.persistence.repository.UserRepository;
import java.util.Optional;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;

@ExtendWith(MockitoExtension.class)

class AuthServiceTest {

    @Mock private UserRepository userRepository;

    @Mock private UserMapper userMapper;

    @Mock private JwtService jwtService;

    @Mock private PasswordEncoder passwordEncoder;

    @InjectMocks private AuthService authService;

    @Test
    void authenticate_shouldReturnToken_whenCredentialsValid() {
        var user = createUser();
        when(userRepository.findByUsername("admin")).thenReturn(Optional.of(user));
        when(passwordEncoder.matches("password", "hashed")).thenReturn(true);
        when(jwtService.generateToken("admin")).thenReturn("jwt-token");
        when(userMapper.toDto(user)).thenCallRealMethod();

        var result = authService.authenticate("admin", "password");

        assertNotNull(result);
        assertEquals("jwt-token", result.token());
        assertNotNull(result.user());
        assertEquals("admin", result.user().username());
        verify(jwtService).generateToken("admin");
    }

    @Test
    void authenticate_shouldThrow_whenPasswordWrong() {
        var user = createUser();
        when(userRepository.findByUsername("admin")).thenReturn(Optional.of(user));
        when(passwordEncoder.matches("wrong", "hashed")).thenReturn(false);

        assertThrows(
                AuthenticationException.class, () -> authService.authenticate("admin", "wrong"));
    }

    @Test
    void authenticate_shouldThrow_whenUserNotFound() {
        when(userRepository.findByUsername(anyString())).thenReturn(Optional.empty());

        assertThrows(
                AuthenticationException.class, () -> authService.authenticate("unknown", "pass"));
    }

    @Test
    void authenticate_shouldReturnCorrectUserClaims() {
        var user = createUser();
        when(userRepository.findByUsername("admin")).thenReturn(Optional.of(user));
        when(passwordEncoder.matches("password", "hashed")).thenReturn(true);
        when(jwtService.generateToken("admin")).thenReturn("jwt-token");
        when(userMapper.toDto(user)).thenCallRealMethod();

        var result = authService.authenticate("admin", "password");

        assertEquals(1L, result.user().id());
        assertEquals("admin@test.com", result.user().email());
    }

    private User createUser() {
        var user = new User();
        user.setId(1L);
        user.setUsername("admin");
        user.setPassword("hashed");
        user.setEmail("admin@test.com");
        return user;
    }
}
