package com.pfa.springjwt.models;

import jakarta.persistence.*;

@Entity
@Table(name = "reclamation")
public class Reclamation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String motif;
    private boolean criticite;
    private String commentaire;
    @ManyToOne
    private PieceJointe pieceJointe;
    @OneToOne
    private Services service;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMotif() {
        return motif;
    }

    public void setMotif(String motif) {
        this.motif = motif;
    }

    public boolean isCriticite() {
        return criticite;
    }

    public void setCriticite(boolean criticite) {
        this.criticite = criticite;
    }

    public String getCommentaire() {
        return commentaire;
    }

    public void setCommentaire(String commentaire) {
        this.commentaire = commentaire;
    }

    public PieceJointe getPieceJointe() {
        return pieceJointe;
    }

    public void setPieceJointe(PieceJointe pieceJointe) {
        this.pieceJointe = pieceJointe;
    }

    public Services getService() {
        return service;
    }

    public void setService(Services service) {
        this.service = service;
    }

	public Reclamation(Long id, String motif, boolean criticite, String commentaire, PieceJointe pieceJointe,
			Services service) {
		this.id = id;
		this.motif = motif;
		this.criticite = criticite;
		this.commentaire = commentaire;
		this.pieceJointe = pieceJointe;
		this.service = service;
	}

	public Reclamation() {
	}
    
    
}
