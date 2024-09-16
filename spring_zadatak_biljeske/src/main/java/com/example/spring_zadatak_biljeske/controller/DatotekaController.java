package com.example.spring_zadatak_biljeske.controller;

import com.example.spring_zadatak_biljeske.model.Biljeska;
import com.example.spring_zadatak_biljeske.model.Datoteka;
import com.example.spring_zadatak_biljeske.repository.DatotekaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/dat")
@CrossOrigin(origins = "http://localhost:4200")
public class DatotekaController {

    @Autowired
    private DatotekaRepository datotekaRepository;

    @PostMapping("/upload")
    public ResponseEntity<Datoteka> uploadFile(@RequestParam("datoteka") MultipartFile file,
                                               @RequestParam("biljeskaid") Long biljeskaid)
            throws IOException {
        try {
            Datoteka savedFile = this.saveFile(file, biljeskaid);
            return ResponseEntity.ok(savedFile);
        } catch (IOException e) {
            return ResponseEntity.status(500).build();
        }
    }

    public Datoteka saveFile(MultipartFile file, Long biljeskaid) throws IOException {
        Datoteka datoteka = new Datoteka();
        datoteka.setIme(file.getOriginalFilename());
        datoteka.setTip(file.getContentType());
        datoteka.setData(file.getBytes());
        datoteka.setBiljeskaid(biljeskaid);

        return datotekaRepository.save(datoteka);
    }

    @GetMapping("/datoteke_by_id_biljeske/{biljeskaid}")
    public List<Datoteka> getAllDatotekeByBiljeskaId(@PathVariable Long biljeskaid){
        return datotekaRepository.findByBiljeskaid(biljeskaid);
    }

    @DeleteMapping("/datoteka/{id}")
    public void deleteDatoteka(@PathVariable Long id){
        datotekaRepository.deleteById(id);
    }
}