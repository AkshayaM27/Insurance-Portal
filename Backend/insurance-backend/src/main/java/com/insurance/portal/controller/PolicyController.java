package com.insurance.portal.controller;

import com.insurance.portal.model.Policy;
import com.insurance.portal.repository.PolicyRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/policies")
@CrossOrigin(origins = "http://localhost:4200")
public class PolicyController {
    private final PolicyRepository policyRepository;

    public PolicyController(PolicyRepository policyRepository) {
        this.policyRepository = policyRepository;
    }

    @PostMapping
    public Policy buyPolicy(@RequestBody Policy policy) {
        return policyRepository.save(policy);
    }

    @GetMapping
    public List<Policy> getPolicies() {
        return policyRepository.findAll();
    }

    @GetMapping("/vehicle/{vehicleNumber}")
    public Policy getPolicyByVehicle(@PathVariable String vehicleNumber) {
        return policyRepository.findByVehicleNumber(vehicleNumber).orElse(null);
    }
}