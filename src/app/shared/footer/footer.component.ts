import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', '../header/header.component.css']
})
export class FooterComponent implements OnInit {
  
  public year: Number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void { }
  
}
