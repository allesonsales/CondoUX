import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCFTVComponent } from './listacftv.component';

describe('ListaCFTVComponent', () => {
  let component: ListaCFTVComponent;
  let fixture: ComponentFixture<ListaCFTVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCFTVComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaCFTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
