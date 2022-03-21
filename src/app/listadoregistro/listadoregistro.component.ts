import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listadoregistro',
  templateUrl: './listadoregistro.component.html',
  styleUrls: ['./listadoregistro.component.css']
})
export class ListadoregistroComponent implements OnInit {

  @Input() datos: any;

  constructor() { }

  ngOnInit(): void {
  }

}
