import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComplianceComponent } from './user-compliance.component';

describe('UserComplianceComponent', () => {
  let component: UserComplianceComponent;
  let fixture: ComponentFixture<UserComplianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComplianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
