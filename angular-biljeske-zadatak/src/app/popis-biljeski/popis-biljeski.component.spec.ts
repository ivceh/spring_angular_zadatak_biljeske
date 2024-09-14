import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopisBiljeskiComponent } from './popis-biljeski.component';

describe('PopisBiljeskiComponent', () => {
  let component: PopisBiljeskiComponent;
  let fixture: ComponentFixture<PopisBiljeskiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopisBiljeskiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopisBiljeskiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
