package com.lhsystems.booking.web.configuration;

import com.lhsystems.booking.core.service.JwtService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity

public class SecurityConfig {

    private final JwtService jwtService;

    public SecurityConfig(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
                .cors(Customizer.withDefaults())
                .sessionManagement(
                        session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(
                        auth ->
                                auth.requestMatchers(HttpMethod.POST, "/api/login")
                                        .permitAll()
                                        .requestMatchers(HttpMethod.GET, "/api/flights")
                                        .permitAll()
                                        // GET /api/booking/{bookingId} is intentionally public.
                                        // The booking ID is a UUID which acts as an unguessable
                                        // secret, allowing unauthenticated status checks per
                                        // the implementation plan requirement.
                                        .requestMatchers(HttpMethod.GET, "/api/booking/{bookingId}")
                                        .permitAll()
                                        .requestMatchers(
                                                HttpMethod.POST, "/api/booking/{bookingId}/cancel")
                                        .permitAll()
                                        .requestMatchers("/actuator/**")
                                        .permitAll()
                                        .requestMatchers(
                                                "/swagger-ui/**",
                                                "/api-docs/**",
                                                "/swagger-ui.html")
                                        .permitAll()
                                        .anyRequest()
                                        .authenticated())
                .addFilterBefore(
                        new JwtAuthFilter(jwtService), UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
