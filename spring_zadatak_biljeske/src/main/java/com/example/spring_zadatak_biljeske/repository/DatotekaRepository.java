package com.example.spring_zadatak_biljeske.repository;

import com.example.spring_zadatak_biljeske.model.Biljeska;
import com.example.spring_zadatak_biljeske.model.Datoteka;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DatotekaRepository extends JpaRepository<Datoteka, Long> {
    List<Datoteka> findByBiljeskaid(Long biljeskaid);
}
