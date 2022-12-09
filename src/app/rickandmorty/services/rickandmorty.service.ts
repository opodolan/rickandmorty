import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RickandmortResponse } from './../models/rickandmort-response.model';
import { RickandmortFilters } from '../models/rickandmort-filters.model';

const baseUrl = 'https://rickandmortyapi.com/';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  constructor(private http: HttpClient) { }

  findBy(filters: RickandmortFilters): Observable<RickandmortResponse> {
    // remove undefined values
    filters = JSON.parse(JSON.stringify(filters));

    // convert to query string
    const queryString = new URLSearchParams(Object.entries(filters)).toString();

    return this.http.get<RickandmortResponse>(`${baseUrl}api/character/?${queryString}`);
  }

  getAll(pages: number = 1): Observable<RickandmortResponse> {
    return this.http.get<RickandmortResponse>(`${baseUrl}api/character/?count=${pages}`);
  }

  get(id: number): Observable<RickandmortResponse> {
    return this.http.get<RickandmortResponse>(`${baseUrl}api/character/${id}`);
  }
}
