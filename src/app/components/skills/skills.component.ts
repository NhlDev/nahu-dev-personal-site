import { HttpClient } from '@angular/common/http';
import { Component, Inject, LOCALE_ID, OnInit, ViewEncapsulation } from '@angular/core';

import { PlatformChekService } from '../../services/platform-check.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SkillsComponent implements OnInit {

  constructor(private platformCheckerSrv: PlatformChekService, private http: HttpClient, @Inject(LOCALE_ID) private locale: string) { }

  public skills?: skill[];

  public ngOnInit(): void {
    if (this.platformCheckerSrv.isBrowser) {
      this.http.get<skill[]>(`assets/skills.${this.locale}.json`).subscribe((data) => this.skills = data);
    }
  }
}

interface skill { image: string, title: string, description: string, isHot: boolean }
