// src/main/java/com/nictripura/nic_website_backend/controller/JobController.java
package com.nictripura.nic_website_backend.controller;

import com.nictripura.nic_website_backend.model.Job;
import com.nictripura.nic_website_backend.repository.JobRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin("http://localhost:5173")
public class JobController {
    private final JobRepository jobs;
    public JobController(JobRepository jobs) { this.jobs = jobs; }

    @GetMapping
    public List<Job> list() { return jobs.findAll(); }

    @PostMapping
    public Job create(@RequestBody Job job) {
        return jobs.save(job);
    }

    @PutMapping("/{id}")
    public Job update(@PathVariable String id, @RequestBody Job updated) {
        updated.setJobId(id);
        return jobs.save(updated);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        jobs.deleteById(id);
    }
}
