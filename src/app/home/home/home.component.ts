import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoaded: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoaded = true;
    }, 5000);
  }

}

