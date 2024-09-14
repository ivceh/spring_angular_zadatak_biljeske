import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiljeskeIzKategorijeComponent } from './biljeske-iz-kategorije.component';

describe('BiljeskeIzKategorijeComponent', () => {
  let component: BiljeskeIzKategorijeComponent;
  let fixture: ComponentFixture<BiljeskeIzKategorijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiljeskeIzKategorijeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiljeskeIzKategorijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
