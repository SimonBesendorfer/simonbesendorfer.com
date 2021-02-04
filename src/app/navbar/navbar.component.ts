import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  showMenue = false;

  ngOnInit(): void {
  }

  openMenue() {
    console.log(this.showMenue);

    if (!this.showMenue) {
      this.showMenue = true;
    } else {
      this.showMenue = false;
    }
    
    console.log(this.showMenue);
  }
}
