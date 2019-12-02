import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpSetupComponent } from './bp-setup.component';

describe('BpSetupComponent', () => {
  let component: BpSetupComponent;
  let fixture: ComponentFixture<BpSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
