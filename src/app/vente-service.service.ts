import { Injectable } from '@angular/core';
import { Achat } from './model/achat';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VenteServiceService {

  private apiUrl = 'http://localhost:8080/achat';

  constructor(private http: HttpClient) {}

  createAchat(achat: Achat): Observable<Achat> {
    return this.http.post<Achat>(`${this.apiUrl}/create`, achat);
  }

  getAllAchats(): Observable<Achat[]> {
    return this.http.get<Achat[]>(`${this.apiUrl}/read`);
  }

  getAchatById(idAchat: number): Observable<Achat> {
    return this.http.get<Achat>(`${this.apiUrl}/read/${idAchat}`);
  }
  updateAchat(achat: Achat): Observable<Achat> {
    return this.http.put<Achat>(`${this.apiUrl}/update`, achat);
  }

  deleteAchat(idAchat: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/delete/${idAchat}`);
  }
}
