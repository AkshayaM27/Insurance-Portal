package com.insurance.portal.repository;

import com.insurance.portal.model.Policy;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PolicyRepository extends JpaRepository<Policy, Long> {
    Optional<Policy> findByVehicleNumber(String vehicleNumber);
}