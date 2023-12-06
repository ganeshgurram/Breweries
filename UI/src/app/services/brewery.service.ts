import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {

private apiUrl = 'https://localhost:7264';

  constructor(private http: HttpClient) {}

  searchBreweries(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/Brewery/SearchBreweries?searchTerm=${query}`);
  }

  getBreweryDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/Brewery/GetBreweryDetails/${id}`);
  }

  addReview(breweryId: string, review: string,rating:number): Observable<any> {
    const reviewData = { reviewText: review,rating:rating };
    return this.http.post<any>(`${this.apiUrl}/api/Brewery/AddReview/${breweryId}/review`, reviewData);
  }
  getIntial():Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/api/Brewery/GetIntialBreweries`);
  }
}
