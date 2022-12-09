import { RickandmortyListComponent } from './rickandmorty/rickandmorty-list/rickandmorty-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'list', component: RickandmortyListComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }, // redirect to list page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
