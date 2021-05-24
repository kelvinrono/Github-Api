import { SearchGithubService } from './../search-github.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {

  username:string;
  searchGithubService:SearchGithubService;
  submitUsername(){
    this.searchGithubService.getUserData(this.username)
    alert('Click on view results to see the fetched data')
  }
  constructor(searchGithubService:SearchGithubService) { 
    this.searchGithubService = searchGithubService;
  }

  ngOnInit(): void {
  }

}
