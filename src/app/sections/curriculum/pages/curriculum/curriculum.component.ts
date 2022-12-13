import { Component, OnInit, ViewEncapsulation } from '@angular/core';

const EXPERIENCES_URL = 'assets/experience.es.json';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CurriculumComponent implements OnInit {

  public experiences?:
    {
      title: string,
      company: string,
      image: string,
      descriptions: string[],
      range: string,
      urls: string[],
      actual?: boolean
    }[];


  public ngOnInit(): void {
    fetch(EXPERIENCES_URL)
      .then(res => res.json())
      .then(data => this.experiences = data);
  }

}
