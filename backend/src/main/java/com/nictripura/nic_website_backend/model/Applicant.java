// src/main/java/com/nictripura/nic_website_backend/model/Applicant.java
package com.nictripura.nic_website_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "applicants")
public class Applicant {
    @Id
    private String id;
    private String name;
    private String postApplied;
    private String status;
    private String email;

    // getters & setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getPostApplied() { return postApplied; }
    public void setPostApplied(String postApplied) { this.postApplied = postApplied; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}
