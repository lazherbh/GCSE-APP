import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  private apiUrl = 'http://localhost:8082/api/responsable-rh/offres';

  constructor(private http: HttpClient) { }

getOffres(): Observable<any>{
  return this.http.get<any>(this.apiUrl)
}
getOneOffre(id :string): Observable<any>{
  const url = `${this.apiUrl}/${id}`;
  return this.http.get<any>(url);
}
postOffre(data: any): Observable<any> {
  console.log(data);
  
  return this.http.post<any>(`${this.apiUrl}/offres`,data);
} 


updateOffre(id : number,data: any): Observable<any[]> {
  console.log(data);
  
  const {titre, details, periodeEnMois, mode, domaine, utilisateur } = data;
 
  return this.http.put<any[]>(`${this.apiUrl}/offres/${id}`,{ titre, details,periodeEnMois,mode, "domaineId":domaine.id, "utilisateurId":utilisateur.id});
}
deleteOffre(id: number):Observable<any>  {
  return  this.http.delete<any[]>(`${this.apiUrl}/offres/${id}`);
}
}