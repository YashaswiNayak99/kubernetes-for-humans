import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend-app';
  hitType = 'LOCAL';
  data = "Service says: ";
  display = false;

  constructor(private appSvc: AppService) { }

  ngOnInit() {
  }

  getData() {
    this.appSvc.getData().subscribe(info => {
      console.log(info);
      this.data += info.message;
      this.display = true;
    }, error => {
      console.log(error);
    });
  }
}
