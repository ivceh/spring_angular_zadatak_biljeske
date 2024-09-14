package com.example.spring_zadatak_biljeske.model;

import jakarta.persistence.*;

@Entity
@Table(name = "kategorije")
public class Kategorija {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "ime")
    private String ime;

    public Kategorija(long id, String ime) {
        this.id = id;
        this.ime = ime;
    }

    public Kategorija() {
    }

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    public String getIme() {
        return ime;
    }
    public void setIme(String ime) {
        this.ime = ime;
    }
}
