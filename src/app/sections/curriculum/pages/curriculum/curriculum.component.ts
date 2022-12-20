import { HttpClient } from '@angular/common/http';
import { Component, Inject, LOCALE_ID, OnInit, ViewEncapsulation } from '@angular/core';

import { PlatformChekService } from '../../../../services/platform-check.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CurriculumComponent implements OnInit {

  constructor(private platformCheckerSrv: PlatformChekService, private http: HttpClient, @Inject(LOCALE_ID) private locale: string) { }

  public experiences?: experiece[];

  public ngOnInit(): void {
    if (this.platformCheckerSrv.isBrowser) {
      this.http.get<experiece[]>(`assets/experience.${this.locale}.json`).subscribe(data => this.experiences = data);
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
