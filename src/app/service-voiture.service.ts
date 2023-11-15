import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceVoitureService {
  private apiUrl = 'localhost:8080/voiture'

  constructor(private http: HttpClient) { }

  //Creation
  createVoiture(voiture: any, photo2?: File, photo3?: File, photo4?: File): Observable<any> {
    const formData = new FormData();
    formData.append('voiture', JSON.stringify(voiture));
    if (photo2) formData.append('photo2', photo2);
    if (photo3) formData.append('photo3', photo3);
    if (photo4) formData.append('photo4', photo4);

    return this.http.post(`${this.apiUrl}/create`, formData);
  }

  getAllVoitures(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/read`);
  }

  getVoitureById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/read/${id}`);
  }
  deleteVoiture(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  // Modification
updateVoiture(id: number, voiture: any, photo2?: File, photo3?: File, photo4?: File): Observable<any> {
    const formData = new FormData();
    formData.append('voiture', JSON.stringify(voiture));
    if (photo2) formData.append('photo2', photo2);
    if (photo3) formData.append('photo3', photo3);
    if (photo4) formData.append('photo4', photo4);

    return this.http.put(`${this.apiUrl}/update/${id}`, formData);
  }

}
