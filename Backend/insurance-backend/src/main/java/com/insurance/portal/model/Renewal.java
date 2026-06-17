package com.insurance.portal.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Renewal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String vehicleNumber;
    private String planName;
    private double renewalAmount;
    private String status;
    private LocalDateTime renewedAt;

    public Renewal() {
        this.status = "Renewed";
        this.renewedAt = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public String getVehicleNumber() {
        return vehicleNumber;
    }

    public void setVehicleNumber(String vehicleNumber) {
        this.vehicleNumber = vehicleNumber;
    }

    public String getPlanName() {
        return planName;
    }

    public void setPlanName(String planName) {
        this.planName = planName;
    }

    public double getRenewalAmount() {
        return renewalAmount;
    }

    public void setRenewalAmount(double renewalAmount) {
        this.renewalAmount = renewalAmount;
    }

    public String getStatus() {
        return status;
    }

    public LocalDateTime getRenewedAt() {
        return renewedAt;
    }
}