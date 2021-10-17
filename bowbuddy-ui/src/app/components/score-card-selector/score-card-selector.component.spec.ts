import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCardSelectorComponent } from './score-card-selector.component';

describe('ScoreCardSelectorComponent', () => {
  let component: ScoreCardSelectorComponent;
  let fixture: ComponentFixture<ScoreCardSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreCardSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreCardSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
