import { Github } from './../github';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
github:Github [][

]
  getGithub(){
    return this.github;
  }
  constructor() { }
}
