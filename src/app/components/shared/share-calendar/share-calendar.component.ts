import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-share-calendar',
  templateUrl: './share-calendar.component.html',
  styleUrls: ['./share-calendar.component.scss'],
})
export class ShareCalendarComponent implements OnInit {
  month = this.data.getCurrentMonth.split('/')[2].split('.')[0] + '.pdf';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { getCurrentMonth: string }
  ) {}
  downloadImg() {
    // saveAs(url, name+'.png');
  }

  shareImage() {
    const pathCurrentMonth = `${this.data.getCurrentMonth.slice(0, -3)}pdf`;

    console.log(pathCurrentMonth);
    console.log(this.month);

    return `https://lacanastadehoy.com//${pathCurrentMonth}`;
  }

  getDescription() {
    const month = this.month.split('.')[0];
    return 'La Canasta de Hoy - Calendario de Temporada ' + month;
  }

  ngOnInit(): void {}
}
