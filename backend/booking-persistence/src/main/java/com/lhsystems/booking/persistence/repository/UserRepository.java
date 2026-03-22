package com.lhsystems.booking.persistence.repository;

import com.lhsystems.booking.persistence.entity.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);
}
