import { HttpClient } from '@angular/common/http';
import { User } from './../user';
import { SearchGithubService } from './../search-github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-details',
  templateUrl: './github-details.component.html',
  styleUrls: ['./github-details.component.css']
})
export class GithubDetailsComponent implements OnInit {

  user: User;
  searchGithubService:SearchGithubService;
  repoDetails = [];

  constructor(searchGithubService: SearchGithubService) {
    this.searchGithubService = searchGithubService;
   }

  ngOnInit() {
    this.user = this.searchGithubService.user;
    this.repoDetails = this.searchGithubService.repoData
   }

}
