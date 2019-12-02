import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateSectorForecastComponent } from './state-sector-forecast.component';

describe('StateSectorForecastComponent', () => {
  let component: StateSectorForecastComponent;
  let fixture: ComponentFixture<StateSectorForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateSectorForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateSectorForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
