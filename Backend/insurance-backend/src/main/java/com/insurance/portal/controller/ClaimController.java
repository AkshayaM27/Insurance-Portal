package com.insurance.portal.controller;

import com.insurance.portal.model.Claim;
import com.insurance.portal.repository.ClaimRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/claims")
@CrossOrigin(origins = "http://localhost:4200")
public class ClaimController {
    private final ClaimRepository claimRepository;

    public ClaimController(ClaimRepository claimRepository) {
        this.claimRepository = claimRepository;
    }

    @PostMapping
    public Claim createClaim(@RequestBody Claim claim) {
        return claimRepository.save(claim);
    }

    @GetMapping
    public List<Claim> getClaims() {
        return claimRepository.findAll();
    }

    @GetMapping("/{id}")
    public Claim getClaimById(@PathVariable Long id) {
        return claimRepository.findById(id).orElse(null);
    }

    @GetMapping("/vehicle/{vehicleNumber}")
    public List<Claim> getClaimsByVehicle(@PathVariable String vehicleNumber) {
        return claimRepository.findByVehicleNumber(vehicleNumber);
    }
}