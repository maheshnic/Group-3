// src/main/java/com/nictripura/nic_website_backend/controller/ApplicantController.java
package com.nictripura.nic_website_backend.controller;

import com.nictripura.nic_website_backend.model.Applicant;
import com.nictripura.nic_website_backend.repository.ApplicantRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/applicants")
@CrossOrigin("http://localhost:5173")
public class ApplicantController {
    private final ApplicantRepository repo;
    public ApplicantController(ApplicantRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Applicant> list() {
        return repo.findAll();
    }

    @PutMapping("/{id}/status")
    public Applicant updateStatus(
            @PathVariable String id,
            @RequestBody Map<String, String> body
    ) {
        String newStatus = body.get("status");
        return repo.findById(id)
                .map(a -> {
                    a.setStatus(newStatus);
                    return repo.save(a);
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
}
