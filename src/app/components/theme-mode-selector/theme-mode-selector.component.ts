import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-theme-mode-selector',
  templateUrl: './theme-mode-selector.component.html',
  styleUrls: ['./theme-mode-selector.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeModeSelectorComponent implements OnInit {

  public currentTheme: 'light' | 'dark' = 'light';

  public ngOnInit(): void {
    this.setTheme();
  }

  public toggleTheme() {
    this.setTheme(this.currentTheme == 'light' ? 'dark' : 'light');
  }

  private setTheme(theme: 'light' | 'dark' | null = null): void {
    theme = theme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      this.currentTheme = 'dark'
    } else {
      document.documentElement.classList.remove('dark');
      this.currentTheme = 'light';
    }
  }
}
