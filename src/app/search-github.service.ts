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
      let promise = new Promise<void>((resolve, reject) => {
        this.http.get<ApiResponse>("https://api.github.com/users/" + username).toPromise().then(response => {
  
          this.user.bio = response.bio;
          this.user.login = response.login;
          this.user.public_repos = response.public_repos;
          this.user.avatar_url = response.avatar_url;
          this.user.created_at = response.created_at;
  
          resolve()
  
        }, error => {
          reject(error)
      
    }
}