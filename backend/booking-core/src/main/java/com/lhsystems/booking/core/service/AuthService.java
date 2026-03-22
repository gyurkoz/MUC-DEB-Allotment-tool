package com.lhsystems.booking.core.service;

import com.lhsystems.booking.api.dto.LoginResponseDTO;
import com.lhsystems.booking.core.exception.AuthenticationException;
import com.lhsystems.booking.core.mapper.UserMapper;
import com.lhsystems.booking.persistence.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service

public class AuthService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;

    public AuthService(
            UserRepository userRepository,
            UserMapper userMapper,
            JwtService jwtService,
            PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.jwtService = jwtService;
        this.passwordEncoder = passwordEncoder;
    }

    public LoginResponseDTO authenticate(String username, String password) {
        var user =
                userRepository.findByUsername(username).orElseThrow(AuthenticationException::new);

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new AuthenticationException();
        }

        var token = jwtService.generateToken(username);
        var userDto = userMapper.toDto(user);
        return new LoginResponseDTO(token, userDto);
    }
}
