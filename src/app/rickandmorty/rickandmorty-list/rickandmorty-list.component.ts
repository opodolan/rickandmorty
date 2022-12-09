import { Component, OnInit } from '@angular/core';
import { RickandmortFilters } from '../models/rickandmort-filters.model';
import { RickandmortResponse } from '../models/rickandmort-response.model';
import { RickandmortyService } from '../services/rickandmorty.service';
import { Rickandmort } from '../models/rickandmort.model';

@Component({
  selector: 'app-rickandmorty-list',
  templateUrl: './rickandmorty-list.component.html',
  styleUrls: ['./rickandmorty-list.component.scss']
})
export class RickandmortyListComponent implements OnInit {

  filters: RickandmortFilters = {};
  results: Rickandmort[];

  constructor(private rickandmortyService: RickandmortyService) { }

  ngOnInit(): void {
    const filters = localStorage.getItem('filters');
    if (filters) {
      this.filters = JSON.parse(filters);
    }
    this.getData();
  }

  getData(): void {
    this.rickandmortyService.findBy(this.filters)
    .subscribe({
      next: (data) => {
        this.results = data.results;
      },
      error: (e) => {
        if(e.status === 404 && e.statusText === "OK") {
          this.results = [];
        }
        console.error(e);
      }
    });
  }

  onFilter(): void {
    localStorage.setItem('filters', JSON.stringify(this.filters));
    this.getData();
  }
}
