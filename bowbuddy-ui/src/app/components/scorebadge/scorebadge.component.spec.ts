import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorebadgeComponent } from './scorebadge.component';

describe('ScorebadgeComponent', () => {
  let component: ScorebadgeComponent;
  let fixture: ComponentFixture<ScorebadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorebadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorebadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
