import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyComponentComponent } from './read-only-component.component';

describe('ReadOnlyComponentComponent', () => {
  let component: ReadOnlyComponentComponent;
  let fixture: ComponentFixture<ReadOnlyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOnlyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
