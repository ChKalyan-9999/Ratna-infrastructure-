import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VermafillingComponent } from './vermafilling.component';

describe('VermafillingComponent', () => {
  let component: VermafillingComponent;
  let fixture: ComponentFixture<VermafillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VermafillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VermafillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
