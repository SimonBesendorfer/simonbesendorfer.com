import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElpollolocoDetailComponent } from './elpolloloco-detail.component';

describe('ElpollolocoDetailComponent', () => {
  let component: ElpollolocoDetailComponent;
  let fixture: ComponentFixture<ElpollolocoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElpollolocoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElpollolocoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
