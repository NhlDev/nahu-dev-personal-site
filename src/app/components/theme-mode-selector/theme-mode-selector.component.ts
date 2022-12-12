import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-theme-mode-selector',
  templateUrl: './theme-mode-selector.component.html',
  styleUrls: ['./theme-mode-selector.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeModeSelectorComponent implements OnInit {

  //constructor(private renderder: Renderer2) { }

  public currentTheme: 'light' | 'dark' = 'light';

  private storage: Storage = sessionStorage; // localStorage;

  public ngOnInit(): void {
    this.setTheme();
  }

  public toggleTheme() {
    this.setTheme(this.currentTheme == 'light' ? 'dark' : 'light');
  }

  private setTheme(theme: 'light' | 'dark' | null = null): void {
    theme = theme ?? this.storage.getItem('theme') as any ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

    if (theme === 'dark') {
      //this.renderder.addClass('body', 'dark')
      document.documentElement.classList.add();
      this.currentTheme = 'dark'
    } else {
      //this.renderder.removeClass('body', 'dark')
      document.documentElement.classList.remove('dark');
      this.currentTheme = 'light';
    }

    this.storage.setItem("theme", (theme as any))
  }
}
