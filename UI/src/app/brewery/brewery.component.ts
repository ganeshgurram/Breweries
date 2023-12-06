import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreweryService } from '../services/brewery.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.css'],
})
export class BreweryComponent implements OnInit {

  breweryId: string= '' ;
  brewery: any;
  newReview: string ='';
  x:boolean=false;
  public collectedStars: number = 0;


  constructor(private route: ActivatedRoute, private breweryService: BreweryService , private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.breweryId = params['id'];
      this.getBreweryDetails();
    });
  }

  getBreweryDetails(): void {
    this.breweryService.getBreweryDetails(this.breweryId).subscribe((data: any) => {
      this.brewery = data;
      console.log(this.brewery);
    });
  }

  addReview(): void {
    if(this.collectedStars==0){
     alert("Give Rating"); 
    }
    else if(this.newReview==''){
      alert("Write Review");
    }
    else{
    this.breweryService.addReview(this.breweryId, this.newReview,this.collectedStars).subscribe(() => {
      this.getBreweryDetails();
      this.cdr.detectChanges();
      this.newReview='';
    });
  }
  
  }

  public setRating(rating: number): void {
    this.collectedStars = rating;
    this.x =true;
    console.log(this.collectedStars);
  }

}
