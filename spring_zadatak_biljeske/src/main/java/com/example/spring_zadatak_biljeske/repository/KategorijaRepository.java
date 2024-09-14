package com.example.spring_zadatak_biljeske.repository;

import com.example.spring_zadatak_biljeske.model.Kategorija;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KategorijaRepository extends JpaRepository <Kategorija, Long> {
}
