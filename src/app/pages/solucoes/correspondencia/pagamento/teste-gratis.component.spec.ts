import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteGratisComponent } from './teste-gratis.component';

describe('TesteGratisComponent', () => {
  let component: TesteGratisComponent;
  let fixture: ComponentFixture<TesteGratisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesteGratisComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TesteGratisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
