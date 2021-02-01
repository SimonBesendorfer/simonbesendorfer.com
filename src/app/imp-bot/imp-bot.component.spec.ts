import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpBotComponent } from './imp-bot.component';

describe('ImpBotComponent', () => {
  let component: ImpBotComponent;
  let fixture: ComponentFixture<ImpBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpBotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
