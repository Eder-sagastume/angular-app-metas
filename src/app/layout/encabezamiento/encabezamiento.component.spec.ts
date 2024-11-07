import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezamientoComponent } from './encabezamiento.component';

describe('EncabezamientoComponent', () => {
  let component: EncabezamientoComponent;
  let fixture: ComponentFixture<EncabezamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncabezamientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncabezamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
