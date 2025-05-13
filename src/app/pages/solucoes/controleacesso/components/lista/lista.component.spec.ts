import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAcessoComponent } from './lista.component';

describe('ListaAcessoComponent', () => {
  let component: ListaAcessoComponent;
  let fixture: ComponentFixture<ListaAcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaAcessoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
