import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-calendar',
  templateUrl: './share-calendar.component.html',
  styleUrls: ['./share-calendar.component.scss']
})
export class ShareCalendarComponent implements OnInit {

  constructor() { }
  downloadImg(){
    // saveAs(url, name+'.png');
  }

  ngOnInit(): void {
  }

}
