import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AmountComponent } from './amount.component';

describe('AmountComponent', () => {
  let component: AmountComponent;
  let fixture: ComponentFixture<AmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
