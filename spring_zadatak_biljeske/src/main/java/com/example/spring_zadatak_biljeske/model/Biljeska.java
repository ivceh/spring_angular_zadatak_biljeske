package com.example.spring_zadatak_biljeske.model;

import jakarta.persistence.*;

@Entity
@Table(name = "biljeske")
public class Biljeska {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "kategorijaid")
    private long kategorijaid;

    @Column(name = "tekst")
    private String tekst;

    public Biljeska(long id, long kategorijaid, String tekst) {
        this.id = id;
        this.kategorijaid = kategorijaid;
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

    public long getKategorijaid() {
        return kategorijaid;
    }

    public void setKategorijaid(long kategorijaid) {
        this.kategorijaid = kategorijaid;
    }

    public String getTekst() {
        return tekst;
    }

    public void setTekst(String tekst) {
        this.tekst = tekst;
    }
}
