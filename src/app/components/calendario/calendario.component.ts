import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ShareCalendarComponent} from '../shared/share-calendar/share-calendar.component'

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {

  // activeLink = this.links[2];

  meses = [
    {
      month : "Enero",
      images : "assets/febrero-calendar.png",
      img_mobile : "assets/febrero-mobile.png",
      active: "false"
    },
    {
      month : "Febrero",
      images : "assets/febrero-calendar.png",
      img_mobile : "assets/febrero-mobile.png",
      active: "true"
    },
    {
      month : "Marzo",
      images : "",
      active: "false"
    },
    {
      month : "Abril",
      images : "",
      active: "false"
    },
    {
      month : "Mayo",
      images : "",
      active: "false"
    },
    {
      month : "Junio",
      images : "",
      active: "false"
    },
    {
      month : "Julio",
      images : "",
      active: "false"
    },
    {
      month : "Agosto",
      images : "",
      active: "false"
    },
    {
      month : "Septiembre",
      images : "",
      active: "false"
    },
    {
      month : "Octubre",
      images : "",
      active: "false"
    },
    {
      month : "Noviembre",
      images : "",
      active: "false"
    },
    {
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
