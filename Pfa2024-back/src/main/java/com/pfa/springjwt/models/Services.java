package com.pfa.springjwt.models;


import jakarta.persistence.*;

@Entity
public class Services {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String service;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
    }

	public Services(Long id, String service) {
		this.id = id;
		this.service = service;
	}

	public Services() {
	}
    
    
}
