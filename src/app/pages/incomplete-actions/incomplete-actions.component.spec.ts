import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncompleteActionsComponent } from './incomplete-actions.component';

describe('IncompleteActionsComponent', () => {
  let component: IncompleteActionsComponent;
  let fixture: ComponentFixture<IncompleteActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncompleteActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncompleteActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
