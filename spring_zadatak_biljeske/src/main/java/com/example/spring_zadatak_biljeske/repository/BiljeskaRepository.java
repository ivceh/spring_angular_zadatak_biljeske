package com.example.spring_zadatak_biljeske.repository;

import com.example.spring_zadatak_biljeske.model.Biljeska;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BiljeskaRepository extends JpaRepository <Biljeska, Long> {
}
