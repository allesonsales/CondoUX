import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroInternoComponent } from './erro-interno.component';

describe('ErroInternoComponent', () => {
  let component: ErroInternoComponent;
  let fixture: ComponentFixture<ErroInternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErroInternoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErroInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
