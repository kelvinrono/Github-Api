import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubDetailsComponent } from './github-details/github-details.component';
import { GithubFormComponent } from './github-form/github-form.component';

const routes: Routes = [
  {path:'github-form', component:GithubFormComponent},
  {path:'github-details', component:GithubDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
