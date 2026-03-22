package com.lhsystems.booking.core.mapper;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.lhsystems.booking.persistence.entity.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class UserMapperTest {

    private UserMapper mapper;

    @BeforeEach
    void setUp() {
        mapper = new UserMapper();
    }

    @Test
    void toDto_shouldMapAllFields() {
        var user = new User();
        user.setId(1L);
        user.setUsername("admin");
        user.setEmail("admin@test.com");

        var dto = mapper.toDto(user);

        assertNotNull(dto);
        assertEquals(1L, dto.id());
        assertEquals("admin", dto.username());
        assertEquals("admin@test.com", dto.email());
    }
}
