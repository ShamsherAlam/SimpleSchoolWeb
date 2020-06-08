import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultynstaffComponent } from './facultynstaff.component';

describe('FacultynstaffComponent', () => {
  let component: FacultynstaffComponent;
  let fixture: ComponentFixture<FacultynstaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultynstaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultynstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
