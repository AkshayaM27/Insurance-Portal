package com.insurance.portal.controller;

import com.insurance.portal.model.Renewal;
import com.insurance.portal.repository.RenewalRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/renewals")
@CrossOrigin(origins = "http://localhost:4200")
public class RenewalController {
    private final RenewalRepository renewalRepository;

    public RenewalController(RenewalRepository renewalRepository) {
        this.renewalRepository = renewalRepository;
    }

    @PostMapping
    public Renewal renewPolicy(@RequestBody Renewal renewal) {
        if (renewal.getPlanName().equalsIgnoreCase("Basic Plan")) {
            renewal.setRenewalAmount(5000);
        } else if (renewal.getPlanName().equalsIgnoreCase("Standard Plan")) {
            renewal.setRenewalAmount(8500);
        } else {
            renewal.setRenewalAmount(12000);
        }

        return renewalRepository.save(renewal);
    }

    @GetMapping
    public List<Renewal> getRenewals() {
        return renewalRepository.findAll();
    }

    @GetMapping("/vehicle/{vehicleNumber}")
    public List<Renewal> getRenewalsByVehicle(@PathVariable String vehicleNumber) {
        return renewalRepository.findByVehicleNumber(vehicleNumber);
    }
}