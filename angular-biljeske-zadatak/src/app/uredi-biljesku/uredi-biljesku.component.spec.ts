import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrediBiljeskuComponent } from './uredi-biljesku.component';

describe('UrediBiljeskuComponent', () => {
  let component: UrediBiljeskuComponent;
  let fixture: ComponentFixture<UrediBiljeskuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UrediBiljeskuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrediBiljeskuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
