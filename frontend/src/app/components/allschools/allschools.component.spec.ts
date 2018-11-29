import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllschoolsComponent } from './allschools.component';

describe('AllschoolsComponent', () => {
  let component: AllschoolsComponent;
  let fixture: ComponentFixture<AllschoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllschoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllschoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
