package com.example.spring_zadatak_biljeske.repository;

import com.example.spring_zadatak_biljeske.model.Datoteka;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DatotekaRepository extends JpaRepository<Datoteka, Long> {
}
