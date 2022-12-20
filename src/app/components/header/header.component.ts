import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HeaderComponent {

  @HostBinding() class = 'main-header';

  public expandMenu: boolean = false;

  public toggleMenu(): void { this.expandMenu = !this.expandMenu; }

}
