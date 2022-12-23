import { Component, HostBinding, Inject, LOCALE_ID, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HeaderComponent implements OnInit {

  @HostBinding() class = 'main-header';

  constructor(private router: Router, @Inject(LOCALE_ID) private locale: string) { }

  public ngOnInit(): void {

    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => this.currentUrl = event['url']);
  }

  public expandMenu: boolean = false;

  public currentUrl!: string

  public toggleMenu(ev: any): void {
    this.expandMenu = !this.expandMenu;    
  }

  public changeLocale(): void {
    const localeToChange = this.locale == 'es' ? 'en' : 'es';
    window.location.assign(`/${localeToChange}${this.currentUrl}`);
  }

}
