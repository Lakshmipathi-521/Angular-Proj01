import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  linksData: string[][];

  constructor() { 
    this.linksData = [
      ["loan", "loan form"],
      ["pipe", "pipe form"],
      ["sdd", "sdd form"],
      ["tasks","Tasks"],
    ]
  }

  ngOnInit(): void {
  }

}
