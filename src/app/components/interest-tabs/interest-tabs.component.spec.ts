import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestTabsComponent } from './interest-tabs.component';

describe('InterestTabsComponent', () => {
  let component: InterestTabsComponent;
  let fixture: ComponentFixture<InterestTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterestTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
