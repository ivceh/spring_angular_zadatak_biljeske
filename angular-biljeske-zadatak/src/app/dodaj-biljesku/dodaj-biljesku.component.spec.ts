import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajBiljeskuComponent } from './dodaj-biljesku.component';

describe('DodajBiljeskuComponent', () => {
  let component: DodajBiljeskuComponent;
  let fixture: ComponentFixture<DodajBiljeskuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DodajBiljeskuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DodajBiljeskuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
