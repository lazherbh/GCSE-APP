import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetanceService {
  private apiUrl = 'http://localhost:8082/manager';

  constructor(private http: HttpClient) { }

getCompetances(): Observable<any>{
  return this.http.get<any>(this.apiUrl)
}
getOneCompetance(id :string): Observable<any>{
  const url = `${this.apiUrl}/${id}`;
  return this.http.get<any>(url);
}
postCompetance(data: any): Observable<any> {
  console.log(data);
  
  return this.http.post<any>(`${this.apiUrl}/Competance`,data);
} 


updateCompetance(id : number,data: any): Observable<any[]> {
  console.log(data);
  
  const {nomCompetence, niveauRequis } = data;
 
  return this.http.put<any[]>(`${this.apiUrl}/Competances/${id}`,{ nomCompetence, niveauRequis});
}
deleteCompetance(id: number):Observable<any>  {
  return  this.http.delete<any[]>(`${this.apiUrl}/Competances/${id}`);
}
}