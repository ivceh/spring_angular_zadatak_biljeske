package com.example.spring_zadatak_biljeske.controller;

import com.example.spring_zadatak_biljeske.exception.ResourceNotFoundException;
import com.example.spring_zadatak_biljeske.model.Biljeska;
import com.example.spring_zadatak_biljeske.model.Kategorija;
import com.example.spring_zadatak_biljeske.repository.KategorijaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class KategorijaController {
    @Autowired
    private KategorijaRepository kategorijaRepository;

    // dohvati sve kategorije
    @GetMapping("/kategorije")
    public List<Kategorija> getAllKategorije(){
        return kategorijaRepository.findAll();
    }

    // dodaj novu
    @PostMapping("/kategorija")
    public Kategorija createKategorija(@RequestBody Kategorija kategorija){
        return kategorijaRepository.save(kategorija);
    }

    // pronađi kategoriju po ID-u
    @GetMapping("/kategorija/{id}")
    public ResponseEntity<Kategorija> getBiljeskaById(@PathVariable Long id){
        Kategorija kategorija = kategorijaRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Tražena kategorija nije pronađena!"));
        return ResponseEntity.ok(kategorija);
    }
}
