import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { PlatformChekService } from '../../services/platform-check.service';

const SKILLS_URL = 'assets/skills.es.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SkillsComponent implements OnInit {

  constructor(private platformCheckerSrv: PlatformChekService, private http: HttpClient) { }

  public skills?: skill[];

  public ngOnInit(): void {
    if (this.platformCheckerSrv.isBrowser) {
      this.http.get<skill[]>(SKILLS_URL).subscribe((data) => this.skills = data);
    }
  }
}

interface skill { image: string, title: string, description: string, isHot: boolean }
