import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegVueloComponent } from './reg-vuelo.component';

describe('RegVueloComponent', () => {
  let component: RegVueloComponent;
  let fixture: ComponentFixture<RegVueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegVueloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
