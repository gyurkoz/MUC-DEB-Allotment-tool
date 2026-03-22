package com.lhsystems.booking.core.mapper;

import com.lhsystems.booking.api.dto.UserDTO;
import com.lhsystems.booking.persistence.entity.User;
import org.springframework.stereotype.Service;

@Service

public class UserMapper {

    public UserDTO toDto(User entity) {
        return new UserDTO(entity.getId(), entity.getUsername(), entity.getEmail());
    }
}
