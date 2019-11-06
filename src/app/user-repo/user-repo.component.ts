import { GithubService } from '../github-github/github-request.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.css']
})
export class UserRepoComponent implements OnInit {
  username:string;
  repo: any;
  repoService: any;
  constructor(_repoService :GithubService) { }
  getRepo(){
    this.repoService.updateUserName(this.username);
    this.repoService.getRepo();
    this.repo=this.repoService.repo;
  }

  ngOnInit( ) {
  }

}
