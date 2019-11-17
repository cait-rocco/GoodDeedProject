import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityDetailComponent } from './charity-detail.component';

describe('CharityDetailComponent', () => {
  let component: CharityDetailComponent;
  let fixture: ComponentFixture<CharityDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
