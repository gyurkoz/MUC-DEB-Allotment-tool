package com.lhsystems.booking.web.controller;

import com.lhsystems.booking.api.dto.FlightDTO;
import com.lhsystems.booking.core.service.FlightService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.constraints.Pattern;
import java.time.LocalDate;
import java.util.List;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@Validated

@RestController
@RequestMapping("/api")
@Tag(name = "flights", description = "Flight availability")

public class FlightController {

    private final FlightService flightService;

    public FlightController(FlightService flightService) {
        this.flightService = flightService;
    }

    @GetMapping("/flights")
    @Operation(summary = "Get available flights", operationId = "getFlights")
    public ResponseEntity<List<FlightDTO>> getFlights(
            @RequestParam
                    @Pattern(
                            regexp = "^(MUC-DEB|DEB-MUC)$",
                            message = "Direction must be MUC-DEB or DEB-MUC")
                    String direction,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dateFrom,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dateTo) {
        if (dateFrom.isAfter(dateTo)) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "dateFrom must not be after dateTo");
        }
        var flights = flightService.findFlights(direction, dateFrom, dateTo);
        return ResponseEntity.ok(flights);
    }
}
