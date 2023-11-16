import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminParking } from './model/adminParking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminParkingServiceService {
  private baseUrl = 'localhost:8080/adminParking';


  constructor(private http: HttpClient) {}

  createAdminParking(adminParking: AdminParking, agrement: File): Observable<AdminParking> {
    const formData: FormData = new FormData();
    formData.append('adminParking', JSON.stringify(adminParking));
    if (agrement) {
      formData.append('agrement', agrement, agrement.name);
    }

    return this.http.post<AdminParking>(`${this.baseUrl}/create`, formData);
  }

  getAllAdminParking(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/read`);
  }

  getAdminParkingById(id: number): Observable<AdminParking> {
    return this.http.get<AdminParking>(`${this.baseUrl}/read/${id}`);
  }

deleteAdminParking(id: number): Observable<string> {
  return this.http.delete<string>(`${this.baseUrl}/delete/${id}`);
}

loginAdmin(email: string, motdepasse: string): Observable<any> {
  const body = {
    email: email,
    motdepasse: motdepasse,
  };

  return this.http.post(`${this.baseUrl}/login`, body);
}

}