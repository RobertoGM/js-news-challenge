import { getTrends, TrendFeed } from './../models/news.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrendsService {
  constructor(private readonly http: HttpClient) {}

  loadProviderTrends(): Observable<getTrends> {
    return this.http.get<getTrends>(`https://challenge.avantio.pro/v1/trends`);
  }
}
