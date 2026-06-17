package com.insurance.portal.controller;

import com.insurance.portal.model.Plan;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/plans")
@CrossOrigin(origins = "http://localhost:4200")
public class PlanController {

    @GetMapping
    public List<Plan> getPlans() {
        return List.of(
                new Plan("Basic Plan", 5000, "Third-party damage", "Low premium"),
                new Plan("Standard Plan", 8500, "Third-party + own damage", "Balanced protection"),
                new Plan("Premium Plan", 12000, "Complete protection", "Roadside assistance")
        );
    }
}