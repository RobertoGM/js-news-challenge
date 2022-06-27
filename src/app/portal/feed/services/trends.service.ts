import { getTrendDetails, getTrends, newTrend } from './../models/news.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrendsService {
  private baseUrl: string = 'https://challenge.avantio.pro/v1/trends';

  constructor(private readonly http: HttpClient) {}

  editProviderTrends(editedTrend: {
    trend: newTrend;
    id: string;
  }): Observable<getTrends> {
    return this.http.put<getTrends>(
      `${this.baseUrl}/${editedTrend.id}`,
      editedTrend.trend
    );
  }

  saveProviderTrends(newTrend: newTrend): Observable<getTrends> {
    return this.http.post<getTrends>(`${this.baseUrl}`, { ...newTrend });
  }

  removeTrend(id: string): Observable<getTrends> {
    return this.http.delete<getTrends>(`${this.baseUrl}/${id}`);
  }

  loadProviderTrends(): Observable<getTrends> {
    return this.http.get<getTrends>(`${this.baseUrl}`);
  }

  loadSingleTrend(id: string): Observable<getTrendDetails> {
    return this.http.get<getTrendDetails>(`${this.baseUrl}/${id}`);
  }
}
