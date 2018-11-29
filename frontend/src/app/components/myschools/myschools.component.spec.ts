import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyschoolsComponent } from './myschools.component';

describe('MyschoolsComponent', () => {
  let component: MyschoolsComponent;
  let fixture: ComponentFixture<MyschoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyschoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyschoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
