import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = "William";
  age: number = 30;
  job = "Programador";
  hobbies = ['Correr', 'Treinar', 'Estudar']
  car = {
    name: "Polo",
    year: 2020
  }

  constructor() { }

  ngOnInit(): void {
  }

}
