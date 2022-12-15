import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { PlatformChekService } from '../../../../services/platform-check.service';

const EXPERIENCES_URL = 'assets/experience.es.json';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CurriculumComponent implements OnInit {

  constructor(private platformCheckerSrv: PlatformChekService, private http: HttpClient) { }

  public experiences?: experiece[];

  public ngOnInit(): void {
    if (this.platformCheckerSrv.isBrowser) {
      this.http.get<experiece[]>(EXPERIENCES_URL).subscribe(data => this.experiences = data);
    }
  }
}

interface experiece {
  title: string,
  company: string,
  image: string,
  descriptions: string[],
  range: string,
  urls: string[],
  actual?: boolean
}
