import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateSectorHistoryComponent } from './state-sector-history.component';

describe('StateSectorHistoryComponent', () => {
  let component: StateSectorHistoryComponent;
  let fixture: ComponentFixture<StateSectorHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateSectorHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateSectorHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
