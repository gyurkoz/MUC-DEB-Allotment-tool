package com.lhsystems.booking.core.isb;

import java.time.LocalDate;
import java.util.List;

public interface IsbClient {

    List<FlightAvailability> searchFlights(String origin, String destination, LocalDate date);

    String createPnr(String flightNumber, String departureTime, String passengerName);

    String retrievePnrStatus(String pnr);

    boolean cancelPnr(String pnr);
}
