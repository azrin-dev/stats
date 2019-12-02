import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BizModelFormComponent } from './biz-model-form.component';

describe('BizModelFormComponent', () => {
  let component: BizModelFormComponent;
  let fixture: ComponentFixture<BizModelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BizModelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BizModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
