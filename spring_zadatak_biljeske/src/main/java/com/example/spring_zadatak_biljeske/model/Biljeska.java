package com.example.spring_zadatak_biljeske.model;

import jakarta.persistence.*;

@Entity
@Table(name = "biljeske")
public class Biljeska {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "kategorija_id")
    private long kategorija_id;

    @Column(name = "tekst")
    private String tekst;

    public Biljeska(long id, long kategorija_id, String tekst) {
        this.id = id;
        this.kategorija_id = kategorija_id;
        this.tekst = tekst;
    }

    public Biljeska() {
    }

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    public long getKategorija_id() {
        return kategorija_id;
    }

    public void setKategorija_id(long kategorija_id) {
        this.kategorija_id = kategorija_id;
    }

    public String getTekst() {
        return tekst;
    }

    public void setTekst(String tekst) {
        this.tekst = tekst;
    }
}
