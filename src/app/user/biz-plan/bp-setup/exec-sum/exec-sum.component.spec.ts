import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ExecSumComponent } from './exec-sum.component';

describe('ExecSumComponent', () => {
  let component: ExecSumComponent;
  let fixture: ComponentFixture<ExecSumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecSumComponent ],
      imports: [
        NoopAnimationsModule,
        DragDropModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
