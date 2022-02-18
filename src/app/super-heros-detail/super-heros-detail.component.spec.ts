import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHerosDetailComponent } from './super-heros-detail.component';

describe('SuperHerosDetailComponent', () => {
  let component: SuperHerosDetailComponent;
  let fixture: ComponentFixture<SuperHerosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHerosDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperHerosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
