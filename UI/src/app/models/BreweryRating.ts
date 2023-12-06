import { BreweryInfo } from "./BreweryInfo";

export class BreweryRating{
public breweryDetails: BreweryInfo;
  public reviews: string[];

  constructor(breweryDetails: BreweryInfo, reviews: string[]) {
    this.breweryDetails = breweryDetails;
    this.reviews = reviews;
  }

}