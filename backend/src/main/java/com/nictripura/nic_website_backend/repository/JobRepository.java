// src/main/java/com/nictripura/nic_website_backend/repository/JobRepository.java
package com.nictripura.nic_website_backend.repository;

import com.nictripura.nic_website_backend.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, String> { }
