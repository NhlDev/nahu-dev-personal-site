import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeModeSelectorComponent } from './theme-mode-selector.component';

describe('ThemeModeSelectorComponent', () => {
  let component: ThemeModeSelectorComponent;
  let fixture: ComponentFixture<ThemeModeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemeModeSelectorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeModeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
