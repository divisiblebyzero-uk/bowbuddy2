import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCardEditComponent } from './score-card-edit.component';

describe('ScoreCardEditComponent', () => {
  let component: ScoreCardEditComponent;
  let fixture: ComponentFixture<ScoreCardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreCardEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
