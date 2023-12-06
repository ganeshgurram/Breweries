export class BreweryInfo {
  public id: string;
  public name: string;
  public brewery_type: string;
  public address_1: string;
  public address_2: string;
  public address_3: string;
  public city: string;
  public state_province: string;
  public postal_code: string;
  public country: string;
  public longitude: string;
  public latitude: string;
  public phone: string;
  public website_url: string;
  public state: string;
  public street: string;

  constructor(
    id: string,
    name: string,
    brewery_type: string,
    address_1: string,
    address_2: string,
    address_3: string,
    city: string,
    state_province: string,
    postal_code: string,
    country: string,
    longitude: string,
    latitude: string,
    phone: string,
    website_url: string,
    state: string,
    street: string
  ) {
    this.id = id;
    this.name = name;
    this.brewery_type = brewery_type;
    this.address_1 = address_1;
    this.address_2 = address_2;
    this.address_3 = address_3;
    this.city = city;
    this.state_province = state_province;
    this.postal_code = postal_code;
    this.country = country;
    this.longitude = longitude;
    this.latitude = latitude;
    this.phone = phone;
    this.website_url = website_url;
    this.state = state;
    this.street = street;
  }
}
