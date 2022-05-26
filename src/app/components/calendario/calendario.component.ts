import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShareCalendarComponent } from '../shared/share-calendar/share-calendar.component';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
})
export class CalendarioComponent implements OnInit {
  activeLink = 1;

  currentMonth = new Date().getMonth();

  months = [
    {
      id: 1,
      month: 'Enero',
      images: 'assets/desktop/ENERO.svg',
      img_mobile: 'assets/mobile/Enero.svg',
      active: 'false',
    },
    {
      id: 2,
      month: 'Febrero',
      images: 'assets/desktop/FEBRERO.svg',
      img_mobile: 'assets/mobile/Febrero.svg',
      active: 'true',
    },
    {
      id: 3,
      month: 'Marzo',
      images: 'assets/desktop/MARZO.svg',
      img_mobile: 'assets/mobile/Marzo.svg',
      active: 'false',
    },
    {
      id: 4,
      month: 'Abril',
      images: 'assets/desktop/ABRIL.svg',
      img_mobile: 'assets/mobile/Abril.svg',
      active: 'false',
    },
    {
      id: 5,
      month: 'Mayo',
      images: 'assets/desktop/MAYO.svg',
      img_mobile: 'assets/mobile/Mayo.svg',
      active: 'false',
    },
    {
      id: 6,
      month: 'Junio',
      images: 'assets/desktop/JUNIO.svg',
      img_mobile: 'assets/mobile/Junio.svg',
      active: 'false',
    },
    {
      id: 7,
      month: 'Julio',
      images: 'assets/desktop/JULIO.svg',
      img_mobile: 'assets/mobile/Julio.svg',
      active: 'false',
    },
    {
      id: 8,
      month: 'Agosto',
      images: 'assets/desktop/AGOSTO.svg',
      img_mobile: 'assets/mobile/Agosto.svg',
      active: 'false',
    },
    {
      id: 9,
      month: 'Septiembre',
      images: 'assets/desktop/SEPTIEMBRE.svg',
      img_mobile: 'assets/mobile/Septiembre.svg',
      active: 'false',
    },
    {
      id: 10,
      month: 'Octubre',
      images: 'assets/desktop/OCTUBRE.svg',
      img_mobile: 'assets/mobile/Octubre.svg',
      active: 'false',
    },
    {
      id: 11,
      month: 'Noviembre',
      images: 'assets/desktop/NOVIEMBRE.svg',
      img_mobile: 'assets/mobile/Noviembre.svg',
      active: 'false',
    },
    {
      id: 12,
      month: 'Diciembre',
      images: 'assets/desktop/DICIEMBRE.svg',
      img_mobile: 'assets/mobile/Diciembre.svg',
      active: 'false',
    },
  ];

  constructor(public dialog: MatDialog) {}
  openDialog(month: number) {
    const currentMonth = this.months[month].images.split('/');
    const getMonthImageUrl = `${currentMonth[0]}/share-files/${
      currentMonth[2].split('.')[0]
    }.pdf`;

    const dialogRef = this.dialog.open(ShareCalendarComponent, {
      data: { getCurrentMonth: getMonthImageUrl },
    });

    console.log(currentMonth, getMonthImageUrl);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {}
}
