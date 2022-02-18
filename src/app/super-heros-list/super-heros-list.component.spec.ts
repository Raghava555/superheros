import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHerosListComponent } from './super-heros-list.component';

describe('SuperHerosListComponent', () => {
  let component: SuperHerosListComponent;
  let fixture: ComponentFixture<SuperHerosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHerosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperHerosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
