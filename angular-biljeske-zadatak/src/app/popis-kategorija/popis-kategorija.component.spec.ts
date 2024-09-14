import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopisKategorijaComponent } from './popis-kategorija.component';

describe('PopisKategorijaComponent', () => {
  let component: PopisKategorijaComponent;
  let fixture: ComponentFixture<PopisKategorijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopisKategorijaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopisKategorijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
