import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCardNewSummaryComponent } from './score-card-new-summary.component';

describe('ScoreCardNewSummaryComponent', () => {
  let component: ScoreCardNewSummaryComponent;
  let fixture: ComponentFixture<ScoreCardNewSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreCardNewSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreCardNewSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
