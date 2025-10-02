import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatnafillingComponent } from './ratnafilling.component';

describe('RatnafillingComponent', () => {
  let component: RatnafillingComponent;
  let fixture: ComponentFixture<RatnafillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatnafillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatnafillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
