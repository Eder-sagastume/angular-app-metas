import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMetasComponent } from './listar-metas.component';

describe('ListarMetasComponent', () => {
  let component: ListarMetasComponent;
  let fixture: ComponentFixture<ListarMetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarMetasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarMetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
