package com.lhsystems.booking.core.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyList;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.lhsystems.booking.core.isb.FlightAvailability;
import com.lhsystems.booking.core.isb.IsbClient;
import com.lhsystems.booking.core.mapper.FlightMapper;
import com.lhsystems.booking.core.util.FlightUtil;
import com.lhsystems.booking.persistence.entity.Flight;
import com.lhsystems.booking.persistence.repository.FlightRepository;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)

class FlightServiceTest {

    @Mock private FlightRepository flightRepository;

    @Mock private FlightMapper flightMapper;

    @Mock private IsbClient isbClient;

    @InjectMocks private FlightService flightService;

    @Test
    void findFlights_shouldSearchIsbAndCacheResults() {
        var avail =
                new FlightAvailability(
                        "LH1234",
                        "LH",
                        "MUC",
                        "DEB",
                        LocalDateTime.of(2026, 4, 1, 8, 0),
                        LocalDateTime.of(2026, 4, 1, 9, 30),
                        90,
                        0,
                        150,
                        new BigDecimal("149.00"),
                        "EUR");
        var dto = FlightUtil.createDto();

        when(isbClient.searchFlights("MUC", "DEB", LocalDate.of(2026, 4, 1)))
                .thenReturn(List.of(avail));
        when(flightRepository.findAllById(anyList())).thenReturn(List.of());
        when(flightRepository.saveAll(anyList())).thenAnswer(inv -> inv.getArgument(0));
        when(flightMapper.toDto(any(Flight.class))).thenReturn(dto);

        var result =
                flightService.findFlights(
                        "MUC-DEB", LocalDate.of(2026, 4, 1), LocalDate.of(2026, 4, 1));

        assertEquals(1, result.size());
        assertEquals(dto, result.get(0));
        verify(isbClient).searchFlights("MUC", "DEB", LocalDate.of(2026, 4, 1));
        verify(flightRepository).saveAll(anyList());
    }

    @Test
    void findFlights_shouldReturnEmptyList_whenNoAvailability() {
        when(isbClient.searchFlights("DEB", "MUC", LocalDate.of(2026, 4, 1))).thenReturn(List.of());

        var result =
                flightService.findFlights(
                        "DEB-MUC", LocalDate.of(2026, 4, 1), LocalDate.of(2026, 4, 1));

        assertTrue(result.isEmpty());
    }

    @Test
    void findFlights_shouldSearchMultipleDays() {
        var avail =
                new FlightAvailability(
                        "LH1234",
                        "LH",
                        "MUC",
                        "DEB",
                        LocalDateTime.of(2026, 4, 1, 8, 0),
                        LocalDateTime.of(2026, 4, 1, 9, 30),
                        90,
                        0,
                        150,
                        new BigDecimal("149.00"),
                        "EUR");
        var dto = FlightUtil.createDto();

        when(isbClient.searchFlights(eq("MUC"), eq("DEB"), any(LocalDate.class)))
                .thenReturn(List.of(avail));
        when(flightRepository.findAllById(anyList())).thenReturn(List.of());
        when(flightRepository.saveAll(anyList())).thenAnswer(inv -> inv.getArgument(0));
        when(flightMapper.toDto(any(Flight.class))).thenReturn(dto);

        var result =
                flightService.findFlights(
                        "MUC-DEB", LocalDate.of(2026, 4, 1), LocalDate.of(2026, 4, 3));

        // 3 days: Apr 1, 2, 3 → 1 flight per day = 3 flights
        assertEquals(3, result.size());
    }

    @Test
    void findFlights_shouldUpdateExistingCachedFlight() {
        var avail =
                new FlightAvailability(
                        "LH1234",
                        "LH",
                        "MUC",
                        "DEB",
                        LocalDateTime.of(2026, 4, 1, 8, 0),
                        LocalDateTime.of(2026, 4, 1, 9, 30),
                        90,
                        1,
                        120,
                        new BigDecimal("199.00"),
                        "EUR");
        var existingFlight = FlightUtil.createEntity();
        var dto = FlightUtil.createDto();

        when(isbClient.searchFlights("MUC", "DEB", LocalDate.of(2026, 4, 1)))
                .thenReturn(List.of(avail));
        when(flightRepository.findAllById(anyList())).thenReturn(List.of(existingFlight));
        when(flightRepository.saveAll(anyList())).thenAnswer(inv -> inv.getArgument(0));
        when(flightMapper.toDto(any(Flight.class))).thenReturn(dto);

        var result =
                flightService.findFlights(
                        "MUC-DEB", LocalDate.of(2026, 4, 1), LocalDate.of(2026, 4, 1));

        assertEquals(1, result.size());
        verify(flightRepository).saveAll(anyList());
    }

    @Test
    void findFlights_shouldSetSoldOutStatus_whenNoSeatsAvailable() {
        var avail =
                new FlightAvailability(
                        "LH1234",
                        "LH",
                        "MUC",
                        "DEB",
                        LocalDateTime.of(2026, 4, 1, 8, 0),
                        LocalDateTime.of(2026, 4, 1, 9, 30),
                        90,
                        0,
                        0,
                        new BigDecimal("149.00"),
                        "EUR");
        var dto = FlightUtil.createDto();

        when(isbClient.searchFlights("MUC", "DEB", LocalDate.of(2026, 4, 1)))
                .thenReturn(List.of(avail));
        when(flightRepository.findAllById(anyList())).thenReturn(List.of());
        when(flightRepository.saveAll(anyList())).thenAnswer(inv -> inv.getArgument(0));
        when(flightMapper.toDto(any(Flight.class))).thenReturn(dto);

        var result =
                flightService.findFlights(
                        "MUC-DEB", LocalDate.of(2026, 4, 1), LocalDate.of(2026, 4, 1));

        assertEquals(1, result.size());
    }

    @Test
    void findFlights_shouldThrow_whenDirectionFormatInvalid() {
        assertThrows(
                IllegalArgumentException.class,
                () ->
                        flightService.findFlights(
                                "INVALID", LocalDate.of(2026, 4, 1), LocalDate.of(2026, 4, 1)));
    }
}
