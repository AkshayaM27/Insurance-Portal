package com.insurance.portal.controller;

import com.insurance.portal.model.VehicleDocument;
import com.insurance.portal.repository.VehicleDocumentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/documents")
@CrossOrigin(origins = "http://localhost:4200")
public class VehicleDocumentController {
    private final VehicleDocumentRepository documentRepository;

    public VehicleDocumentController(VehicleDocumentRepository documentRepository) {
        this.documentRepository = documentRepository;
    }

    @PostMapping
    public VehicleDocument uploadDocument(@RequestBody VehicleDocument document) {
        return documentRepository.save(document);
    }

    @GetMapping
    public List<VehicleDocument> getDocuments() {
        return documentRepository.findAll();
    }

    @GetMapping("/vehicle/{vehicleNumber}")
    public List<VehicleDocument> getDocumentsByVehicle(@PathVariable String vehicleNumber) {
        return documentRepository.findByVehicleNumber(vehicleNumber);
    }
}