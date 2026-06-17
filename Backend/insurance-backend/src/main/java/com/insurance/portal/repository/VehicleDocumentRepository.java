package com.insurance.portal.repository;

import com.insurance.portal.model.VehicleDocument;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VehicleDocumentRepository extends JpaRepository<VehicleDocument, Long> {
    List<VehicleDocument> findByVehicleNumber(String vehicleNumber);
}