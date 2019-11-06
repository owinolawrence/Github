import { Github } from './../github';
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github-github/github-request.service';
import { User } from '../user';
import { Repo } from '../repo';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  repo: Repo;
 github:Github[];
  constructor(public githubService:GithubService) { 
    this.github=githubService.getGithub()
  }

  ngOnInit() {
    this.githubService.getProfileInfo().then(()=>{
      this.user = this.githubService.user;
    })
  }

}

