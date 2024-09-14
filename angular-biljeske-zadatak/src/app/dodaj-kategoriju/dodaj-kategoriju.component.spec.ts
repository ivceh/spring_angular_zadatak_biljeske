import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajKategorijuComponent } from './dodaj-kategoriju.component';

describe('DodajKategorijuComponent', () => {
  let component: DodajKategorijuComponent;
  let fixture: ComponentFixture<DodajKategorijuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DodajKategorijuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DodajKategorijuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
