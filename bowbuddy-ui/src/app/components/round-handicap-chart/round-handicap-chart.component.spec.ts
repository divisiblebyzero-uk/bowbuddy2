import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundHandicapChartComponent } from './round-handicap-chart.component';

describe('RoundHandicapChartComponent', () => {
  let component: RoundHandicapChartComponent;
  let fixture: ComponentFixture<RoundHandicapChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundHandicapChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundHandicapChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
