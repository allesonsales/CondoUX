import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleacessoComponent } from './controleacesso.component';

describe('ControleacessoComponent', () => {
  let component: ControleacessoComponent;
  let fixture: ComponentFixture<ControleacessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControleacessoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleacessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
