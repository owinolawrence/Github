import { GithubService } from './../git-service/github.service';
import { Github } from './../github';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 github:Github[];
  constructor(githubService:GithubService) { 
    this.github=githubService.getGithub()
  }

  ngOnInit() {
  }

}
