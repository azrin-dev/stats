import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BizModelComponent } from './biz-model.component';

describe('BizModelComponent', () => {
  let component: BizModelComponent;
  let fixture: ComponentFixture<BizModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BizModelComponent ],
      imports: [
        NoopAnimationsModule,
        DragDropModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BizModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
