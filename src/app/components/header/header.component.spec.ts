import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeModeSelectorComponent, HeaderComponent } from '../';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        ThemeModeSelectorComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(component).toBeTruthy(); });

  it('#toggleMenu() should toggle #expandMenu', () => {

    expect(component.expandMenu)
      .withContext('init with false')
      .toBe(false);

    component.toggleMenu();

    expect(component.expandMenu)
      .withContext('true after menu click')
      .toBe(true);

    component.toggleMenu();

    expect(component.expandMenu)
      .withContext('false after second click')
      .toBe(false);
  });
});
