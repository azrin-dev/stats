import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesSectorComponent } from './states-sector.component';

describe('StatesSectorComponent', () => {
  let component: StatesSectorComponent;
  let fixture: ComponentFixture<StatesSectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatesSectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
