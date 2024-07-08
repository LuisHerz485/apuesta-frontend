import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegSolicitudComponent } from './reg-solicitud.component';

describe('RegSolicitudComponent', () => {
  let component: RegSolicitudComponent;
  let fixture: ComponentFixture<RegSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegSolicitudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
