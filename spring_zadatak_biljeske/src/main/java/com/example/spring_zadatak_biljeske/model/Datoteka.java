package com.example.spring_zadatak_biljeske.model;

import jakarta.persistence.*;

@Entity
@Table(name = "datoteke")
public class Datoteka {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "biljeskaid")
    private long biljeskaid;

    @Column(name = "ime")
    private String ime;

    @Column(name = "tip")
    private String tip;

    @Lob
    @Column(name = "sadrzaj")
    private byte[] data;

    public Datoteka(long id, long biljeskaid, String ime, String tip, byte[] data) {
        this.id = id;
        this.biljeskaid = biljeskaid;
        this.ime = ime;
        this.tip = tip;
        this.data = data;
    }

    public Datoteka() {
    }

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    public long getBiljeskaid() {
        return biljeskaid;
    }

    public void setBiljeskaid(long biljeskaid) {
        this.biljeskaid = biljeskaid;
    }

    public String getIme() {
        return ime;
    }

    public void setIme(String ime) {
        this.ime = ime;
    }

    public String getTip() {
        return tip;
    }

    public void setTip(String tip) {
        this.tip = tip;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }
}
