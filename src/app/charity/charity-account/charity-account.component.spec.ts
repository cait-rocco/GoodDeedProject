import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityAccountComponent } from './charity-account.component';

describe('CharityAccountComponent', () => {
  let component: CharityAccountComponent;
  let fixture: ComponentFixture<CharityAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
