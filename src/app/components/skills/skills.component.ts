import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

const SKILLS_URL = 'assets/skills.es.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SkillsComponent implements OnInit {

  public skills?: { image: string, title: string, description: string, isHot: boolean }[];

  public ngOnInit(): void {
    fetch(SKILLS_URL)
      .then(res => res.json())
      .then((data) => this.skills = data);
  }
}
