import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceComponentComponent } from './compliance-component.component';

describe('ComplianceComponentComponent', () => {
  let component: ComplianceComponentComponent;
  let fixture: ComponentFixture<ComplianceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplianceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplianceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
