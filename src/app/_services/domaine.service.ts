import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {
  private apiUrl = 'http://localhost:8082/manager';

  constructor(private http: HttpClient) { }

getDomaines(): Observable<any>{
  return this.http.get<any>(this.apiUrl)
}

postDomaine(data: any): Observable<any> {
  console.log(data);
  
  return this.http.post<any>(`${this.apiUrl}/Domaine`,data);
} 


updateDomaine(id : number,data: any): Observable<any[]> {
  console.log(data);
  
  const {nom } = data;
 
  return this.http.put<any[]>(`${this.apiUrl}/Domaines/${id}`,{ nom});
}
deleteDomaine(id: number):Observable<any>  {
  return  this.http.delete<any[]>(`${this.apiUrl}/Domaines/${id}`);
}
}