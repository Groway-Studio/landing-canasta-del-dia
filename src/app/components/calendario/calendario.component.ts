import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ShareCalendarComponent} from '../shared/share-calendar/share-calendar.component'

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {

  activeLink = 1;

  meses = [
    {
      id : 1,
      month : "Enero",
      images : "assets/febrero-calendar.png",
      img_mobile : "assets/febrero-mobile.png",
      active: "false"
    },
    {
      id : 2,
      month : "Febrero",
      images : "assets/febrero-calendar.png",
      img_mobile : "assets/febrero-mobile.png",
      active: "true"
    },
    {
      id : 3,
      month : "Marzo",
      images : "",
      active: "false"
    },
    {
      id : 4,
      month : "Abril",
      images : "",
      active: "false"
    },
    {
      id : 5,
      month : "Mayo",
      images : "",
      active: "false"
    },
    {
      id : 6,
      month : "Junio",
      images : "",
      active: "false"
    },
    {
      id : 7,
      month : "Julio",
      images : "",
      active: "false"
    },
    {
      id : 8,
      month : "Agosto",
      images : "",
      active: "false"
    },
    {
      id : 9,
      month : "Septiembre",
      images : "",
      active: "false"
    },
    {
      id : 10,
      month : "Octubre",
      images : "",
      active: "false"
    },
    {
      id : 11,
      month : "Noviembre",
      images : "",
      active: "false"
    },
    {
      id : 12,
      month : "Diciembre",
      images : "",
      active: "false"
    }

  ]



  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(ShareCalendarComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
