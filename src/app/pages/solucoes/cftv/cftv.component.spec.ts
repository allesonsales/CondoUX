import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CftvComponent } from './cftv.component';

describe('CftvComponent', () => {
  let component: CftvComponent;
  let fixture: ComponentFixture<CftvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CftvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CftvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
