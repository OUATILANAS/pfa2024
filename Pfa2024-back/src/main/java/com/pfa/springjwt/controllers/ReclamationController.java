package com.pfa.springjwt.controllers;



import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import com.pfa.springjwt.models.Reclamation;
import com.pfa.springjwt.service.ReclamationService;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/reclamations")
public class ReclamationController {

    private final ReclamationService reclamationService;



    @GetMapping("/all")
    public List<Reclamation> findAll() {
        return reclamationService.findAll();
    }

    @PostMapping("/save-reclamation")
    public <S extends Reclamation> S save(@RequestBody S entity) {
        return reclamationService.save(entity);
    }

    @GetMapping("/reclamation/{id}")
    public Optional<Reclamation> findById(@PathVariable Long id) {
        return reclamationService.findById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable Long id) {
        reclamationService.deleteById(id);
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<Reclamation> updateReclamation(
            @PathVariable Long id,
            @RequestBody Reclamation updatedReclamation
    ) {
        Optional<Reclamation> updated = reclamationService.updateReclamation(id, updatedReclamation);

        return updated.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }
}
