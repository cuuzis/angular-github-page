import { Component } from '@angular/core';
import { SonarService } from './sonar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private sonarService: SonarService) { }

  public testRest() {
    console.log("testing");
    this.sonarService.getProjects().subscribe(
      res => console.log(res),
      err => console.error(err)
    )
  }
}
