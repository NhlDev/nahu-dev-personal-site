import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { getWindow, getDocument } from 'ssr-window';

import { PlatformChekService } from '../../services/platform-check.service';
import { StorageService } from '../../services/ssr-storage-fixer.service';

@Component({
  selector: 'app-theme-mode-selector',
  templateUrl: './theme-mode-selector.component.html',
  styleUrls: ['./theme-mode-selector.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeModeSelectorComponent implements OnInit {

  constructor(storage: StorageService, private platformChekSrv: PlatformChekService) {
    this.storage = storage;
  }

  public currentTheme: 'light' | 'dark' = 'light';

  // Fake on server side
  private storage!: Storage;
  private window = getWindow();
  private document = getDocument();

  public ngOnInit(): void {
    this.setTheme();
  }

  public toggleTheme() {
    if (this.platformChekSrv.isBrowser) {
      this.setTheme(this.currentTheme == 'light' ? 'dark' : 'light');
    }
  }

  private setTheme(theme: 'light' | 'dark' | null = null): void {

    theme = theme ?? this.storage.getItem('theme') as any ?? (this.window?.matchMedia('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light')

    if (theme === 'dark' && document?.documentElement) {
      this.document.documentElement?.classList.add('dark');
      this.currentTheme = 'dark'
    } else {
      this.document.documentElement?.classList.remove('dark');
      this.currentTheme = 'light';
    }

    this.storage.setItem("theme", (theme as any))
  }
}
