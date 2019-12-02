import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesManufacturingComponent } from './states-manufacturing.component';

describe('StatesManufacturingComponent', () => {
  let component: StatesManufacturingComponent;
  let fixture: ComponentFixture<StatesManufacturingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatesManufacturingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesManufacturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
