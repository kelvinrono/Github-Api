import { Repository } from './repository';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SearchGithubService {
  user!: User;
  repository!: Repository;
  repoData = [];
  newUserData:any = [];
  constructor() { }
}
