import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AccuWeatherService } from './../services/accu-weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  // list = listData.reverse();
  @ViewChild('searchbar') searchbar: ElementRef;
  searchText = '';
  currentCondition: any;

  toggleSearch: boolean = false;
  constructor(private accuweather: AccuWeatherService) {

  }

  openSearch() {
    this.toggleSearch = true;
    this.searchbar.nativeElement.focus();
  }
  searchClose() {
    this.searchText = '';
    this.toggleSearch = false;
  }

  ngOnInit(): void {
    this.accuweather.getCurrentCondition('350540').subscribe(resp => {
      console.log(resp);
      this.currentCondition = resp;
    });

  }



}
