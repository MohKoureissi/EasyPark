import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private baseUrl = 'http://localhost:8080/location';

  constructor(private http: HttpClient) { }

  createLocation(location: Location): Observable<Location> {
    return this.http.post<Location>(`${this.baseUrl}/create`, location);
  }

  getAllLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.baseUrl}/read`);
  }

  getLocationById(idLocation: number): Observable<Location> {
    return this.http.get<Location>(`${this.baseUrl}/read/${idLocation}`);
  }
  updateLocation(location: Location): Observable<Location> {
    return this.http.put<Location>(`${this.baseUrl}/update`, location);
  }

  deleteLocation(idLocation: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/delete/${idLocation}`);
  }
}
