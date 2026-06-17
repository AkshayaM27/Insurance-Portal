package com.insurance.portal.repository;

import com.insurance.portal.model.Claim;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClaimRepository extends JpaRepository<Claim, Long> {
    List<Claim> findByVehicleNumber(String vehicleNumber);
}