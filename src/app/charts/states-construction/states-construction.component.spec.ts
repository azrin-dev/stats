import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesConstructionComponent } from './states-construction.component';

describe('StatesConstructionComponent', () => {
  let component: StatesConstructionComponent;
  let fixture: ComponentFixture<StatesConstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatesConstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
