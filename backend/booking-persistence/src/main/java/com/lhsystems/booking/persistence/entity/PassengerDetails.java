package com.lhsystems.booking.persistence.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable

public class PassengerDetails {

    @Column(name = "passenger_u_number", length = 20)
    private String userNumber;

    @Column(name = "passenger_first_name", length = 50)
    private String firstName;

    @Column(name = "passenger_last_name", length = 50)
    private String lastName;

    @Column(name = "passenger_email", length = 255)
    private String email;

    @Column(name = "passenger_phone_number", length = 50)
    private String phoneNumber;

    public String getUserNumber() {
        return userNumber;
    }

    public void setUserNumber(String userNumber) {
        this.userNumber = userNumber;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
