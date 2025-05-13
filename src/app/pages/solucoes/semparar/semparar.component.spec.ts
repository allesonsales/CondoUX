import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SempararComponent } from './semparar.component';

describe('SempararComponent', () => {
  let component: SempararComponent;
  let fixture: ComponentFixture<SempararComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SempararComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SempararComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
