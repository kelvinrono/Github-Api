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
  constructor(private http: HttpClient) {
    this.user = new User("", 0, "", "", new Date())
    this.repository = new Repository("", "", new Date(), "", "")
  }

    getUserData(username:string){
      interface ApiResponse {
        bio: string,
        public_repos: number,
        login: string,
        avatar_url: string,
        created_at: Date
  
      }
    }
}
