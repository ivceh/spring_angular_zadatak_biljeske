package com.example.spring_zadatak_biljeske.controller;

import com.example.spring_zadatak_biljeske.exception.ResourceNotFoundException;
import com.example.spring_zadatak_biljeske.model.Biljeska;
import com.example.spring_zadatak_biljeske.repository.BiljeskaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class BiljeskaController {
    @Autowired
    private BiljeskaRepository biljeskaRepository;

    // dohvati sve biljeske
    @GetMapping("/biljeske")
    public List<Biljeska> getAllBiljeske(){
        return biljeskaRepository.findAll();
    }

    // dodaj novu biljesku
    @PostMapping("/biljeska")
    public Biljeska createBiljeska(@RequestBody Biljeska biljeska){
        return biljeskaRepository.save(biljeska);
    }

    // pronađi bilješku po ID-u
    @GetMapping("/biljeska/{id}")
    public ResponseEntity<Biljeska> getBiljeskaById(@PathVariable Long id){
        Biljeska biljeska = biljeskaRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Tražena bilješka nije pronađena!"));
        return ResponseEntity.ok(biljeska);
    }

    //uredi biljesku
    @PutMapping("/biljeska/{id}")
    public ResponseEntity<Biljeska> updateBiljeska(@PathVariable Long id, @RequestBody Biljeska biljeskaDetails){
        Biljeska biljeska = biljeskaRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Tražena bilješka nije pronađena!"));
        biljeska.setTekst(biljeskaDetails.getTekst());
        biljeska.setKategorijaid(biljeskaDetails.getKategorijaid());

        Biljeska updatedBiljeska = biljeskaRepository.save(biljeska);
        return ResponseEntity.ok().body((Biljeska) updatedBiljeska);
    }

    //izbrisi biljesku (pozabaviti se s provjerom uspješnosti ovdje i za datoteke)
    @DeleteMapping("/biljeska/{id}")
    public void deleteBiljeska(@PathVariable Long id){
        biljeskaRepository.deleteById(id);
    }

    @GetMapping("/biljeske_by_id_kategorije/{kategorijaid}")
    public List<Biljeska> getAllBiljeskeByKategorijaId(@PathVariable Long kategorijaid){
        List<Biljeska> l1 = biljeskaRepository.findByKategorijaid(kategorijaid);
        return l1;
    }
}
