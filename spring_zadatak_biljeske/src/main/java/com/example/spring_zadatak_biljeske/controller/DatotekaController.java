package com.example.spring_zadatak_biljeske.controller;

import com.example.spring_zadatak_biljeske.exception.ResourceNotFoundException;
import com.example.spring_zadatak_biljeske.model.Biljeska;
import com.example.spring_zadatak_biljeske.model.Datoteka;
import com.example.spring_zadatak_biljeske.repository.DatotekaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/dat")
@CrossOrigin(origins = "http://localhost:4200")
public class DatotekaController {

    @Autowired
    private DatotekaRepository datotekaRepository;

    @Transactional
    @PostMapping("/upload")
    public ResponseEntity<Datoteka> uploadFile(@RequestParam("datoteka") MultipartFile file,
                                               @RequestParam("biljeskaid") Long biljeskaid)
            throws IOException {
        try {
            Datoteka savedFile = new Datoteka(this.saveFile(file, biljeskaid));
            // savedFile.setData(new byte[0]); // da se ne šalje nazad sadržaj datoteke
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

    @Transactional
    @GetMapping("/datoteke_by_id_biljeske/{biljeskaid}")
    public List<Datoteka> getAllDatotekeByBiljeskaId(@PathVariable Long biljeskaid){
        return datotekaRepository.findByBiljeskaid(biljeskaid);
    }

    @Transactional
    @DeleteMapping("/datoteka/{id}")
    public void deleteFile(@PathVariable Long id){
        datotekaRepository.deleteById(id);
    }

    private Datoteka getFileById(Long id) {
        return datotekaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("File not found with id " + id));
    }

    @Transactional
    @GetMapping("/download/{id}")
    public ResponseEntity<byte[]> downloadFile(@PathVariable Long id) {
        Datoteka datoteka = this.getFileById(id);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + datoteka.getIme() + "\"")
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(datoteka.getData());
    }
}