import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TotalICUComponent } from './total-icu.component';

describe('TotalICUComponent', () => {
  let component: TotalICUComponent;
  let fixture: ComponentFixture<TotalICUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalICUComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TotalICUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
