import { Repo } from './../repo';
import { User } from './../user';
import { environment } from './../../environments/environment';
import { Github } from './../github';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class GithubService {
  github: Github[] = [];
  updateUseName(username: string) {
    throw new Error("Method not implemented.");
  }
  getGithub(): Github[] {
    throw new Error("Method not implemented.");
    // return Github[];
  }
  user :User;
  username :string;
  repo:Repo;


  
  constructor( private http:HttpClient) { 
    this .user = new User ("","");
    this .username = "owinolawrence";
    this.repo = new Repo ("","","","","")
  }
  getProfileInfo(){
    interface ApiResponse{
      name :string;
      avatar_url:string;
      email:string;
      public_repos:number;
      followers:number;
      following:number;
      created_at:Date;

    }
    let promise = new Promise ((resolve,reject) => {
      this.http.get<ApiResponse>(
        "https://api.github.com/users/" +
        this.username +
        "?access_token=" +
        environment.AccessToken
      ).toPromise().then((profile) => {
            this.user.name = profile['owner']['login'];
            
            this.user.avatar_url = profile['owner']['avatar_url']
            resolve();
          },
          error => {
            throw new error(
              "Something went wrong while trying to load resource"
            );
            reject(error);
          }
        );
        
    })
    return promise;
  }

  getRepo(){
    interface RepoResponse {
      name: string;
      description: string;
      html_url: string;
    }

    let promise = new Promise((resolve, reject) => {
      this.http
        .get<RepoResponse>(
          "https://api.github.com/users/" +
            this.username +
            "/repos?access_token=" +
            environment.AccessToken
        )
        .toPromise()
        .then(
          repo => {
            repo = repo;
            resolve();
          },
          error => {
            throw new error(
              "Try again"
            );
            reject(error);
          }
        );
    });
    return promise;
  }

  updateUserName(username: string) {
    this.username = username;
  }

}

  
