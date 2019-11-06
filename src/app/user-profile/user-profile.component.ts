import { GithubService } from '../github-github/github-request.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
username :string;
profile:any;
  constructor( private userService:GithubService) { }
getProfile(){
  this.userService.updateUseName(this.username);
  this.userService.getProfileInfo();
  this.profile = this.userService.user;
}
  ngOnInit() {
  }

}
