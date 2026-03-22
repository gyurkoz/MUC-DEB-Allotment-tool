package com.lhsystems.booking.web.controller;

import com.lhsystems.booking.api.dto.LoginRequestDTO;
import com.lhsystems.booking.api.dto.LoginResponseDTO;
import com.lhsystems.booking.core.service.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Tag(name = "auth", description = "Authentication endpoints")

public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    @Operation(summary = "Authenticate user", operationId = "login")
    public ResponseEntity<LoginResponseDTO> login(@Valid @RequestBody LoginRequestDTO request) {
        var response = authService.authenticate(request.username(), request.password());
        return ResponseEntity.ok(response);
    }
}
