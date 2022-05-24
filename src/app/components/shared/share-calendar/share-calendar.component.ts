import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-share-calendar',
  templateUrl: './share-calendar.component.html',
  styleUrls: ['./share-calendar.component.scss']
})
export class ShareCalendarComponent implements OnInit {
  month = this.data.getCurrentMonth.split('/')[2];
  constructor(@Inject(MAT_DIALOG_DATA) public data: {getCurrentMonth: string}) {}
  downloadImg(){
    // saveAs(url, name+'.png');
  }

  ngOnInit(): void {}

}
