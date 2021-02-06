import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive-demo',
  templateUrl: './structural-directive-demo.component.html',
  styleUrls: ['./structural-directive-demo.component.css']
})
export class StructuralDirectiveDemoComponent implements OnInit {

  numVal: number;
  constructor() { 
    this.numVal = 0;
  }

  ngOnInit(): void {
  }

}
