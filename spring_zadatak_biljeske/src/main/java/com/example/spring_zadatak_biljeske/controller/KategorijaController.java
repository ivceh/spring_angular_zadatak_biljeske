package com.example.spring_zadatak_biljeske.controller;

import com.example.spring_zadatak_biljeske.model.Kategorija;
import com.example.spring_zadatak_biljeske.repository.KategorijaRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
}
