import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent{

  strVal: string;
  numVal: number;
  dtValue: Date;
  constructor()
  {
    this.strVal = "Hello world";
    this.numVal = Math.PI;
    this.dtValue = new Date();
   }

  
}
