import { Component, OnInit } from '@angular/core';
import { BreweryService } from '../services/brewery.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  ngOnInit(): void {
    this.breweryService.getIntial().subscribe((data) => {
        this.breweries = data;
        console.log(this.breweries);
        console.log(localStorage.getItem('ss_User'));
      });
  }

  searchTerm: string = '';
  breweries: any[] = [];

  constructor(private breweryService: BreweryService) {}

  search(): void {
    if (this.searchTerm.trim() !== '') {
      this.breweryService.searchBreweries(this.searchTerm).subscribe((data) => {
        this.breweries = data;
        console.log(this.breweries[0].id);
       // console.log(this.breweries[0].breweryId);
        console.log(localStorage.getItem('ss_User'));
      });
    }
  }
}
