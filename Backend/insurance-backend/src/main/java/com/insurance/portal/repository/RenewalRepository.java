package com.insurance.portal.repository;

import com.insurance.portal.model.Renewal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RenewalRepository extends JpaRepository<Renewal, Long> {
    List<Renewal> findByVehicleNumber(String vehicleNumber);
}