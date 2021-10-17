import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCardDisplayComponent } from './score-card-display.component';

describe('ScoreCardDisplayComponent', () => {
  let component: ScoreCardDisplayComponent;
  let fixture: ComponentFixture<ScoreCardDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreCardDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreCardDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
