package com.lhsystems.booking.web.controller;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.lhsystems.booking.api.dto.LoginResponseDTO;
import com.lhsystems.booking.api.dto.UserDTO;
import com.lhsystems.booking.core.exception.AuthenticationException;
import com.lhsystems.booking.core.service.AuthService;
import com.lhsystems.booking.core.service.JwtService;
import com.lhsystems.booking.web.configuration.SecurityConfig;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(AuthController.class)
@Import(SecurityConfig.class)

class AuthControllerTest {

    @Autowired private MockMvc mockMvc;

    @MockitoBean private AuthService authService;

    @MockitoBean private JwtService jwtService;

    @Test
    void login_shouldReturn200_whenCredentialsValid() throws Exception {
        var userDto = new UserDTO(1L, "admin", "admin@test.com");
        var response = new LoginResponseDTO("jwt-token", userDto);
        when(authService.authenticate("admin", "password")).thenReturn(response);

        mockMvc.perform(
                        post("/api/login")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(
                                        """
                                        {
                                                        "username": "admin",
                                                        "password": "password"
                                        }
                                        """))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.token").value("jwt-token"))
                .andExpect(jsonPath("$.user.username").value("admin"));
    }

    @Test
    void login_shouldReturn400_whenBodyEmpty() throws Exception {
        mockMvc.perform(post("/api/login").contentType(MediaType.APPLICATION_JSON).content("{}"))
                .andExpect(status().isBadRequest());
    }

    @Test
    void login_shouldReturn401_whenCredentialsInvalid() throws Exception {
        when(authService.authenticate(anyString(), anyString()))
                .thenThrow(new AuthenticationException());

        mockMvc.perform(
                        post("/api/login")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(
                                        """
                                        {
                                                        "username": "admin",
                                                        "password": "wrong"
                                        }
                                        """))
                .andExpect(status().isUnauthorized());
    }
}
