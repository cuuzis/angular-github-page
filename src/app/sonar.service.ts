import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SonarService {

  constructor(
    private http: HttpClient
  ) { }


  getProjects(): Observable<Project> {
    const project: Project = { id: 123 };

    const corsIo = 'https://cors.io/?';
    const sonarCloud = 'https://sonarcloud.io/api/components/search?qualifiers=TRK';
    const blockchain = 'https://blockchain.info/stats?format=json';

    return this.http.get(corsIo + sonarCloud)
    .pipe(
      map(result => result['paging'].total ),
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        console.log(`outcome: ${outcome}`);
      })
    );
  }
}
