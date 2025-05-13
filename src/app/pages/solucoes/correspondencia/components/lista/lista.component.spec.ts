import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCorrespondenciaComponent } from './lista.component';

describe('ListaComponent', () => {
  let component: ListaCorrespondenciaComponent;
  let fixture: ComponentFixture<ListaCorrespondenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCorrespondenciaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaCorrespondenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
