import { Component, OnInit } from '@angular/core';
import { GithubService} from '../service/github.service'

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  username:string;
  profile:any;
  repo:any;
  
  constructor(private gitService: GithubService) {
    this.gitService.updateUser(this.username);
    this.gitService.gitProfile().subscribe(profile => {
      this.profile = profile;
    });

    this.gitService.gitRepos().subscribe(repos => {
      
      this.repo = repos;
    });
  }
  ngOnInit():void {
      this.gitService.updateUser('lloydMwiti');
      this.gitService.gitProfile().subscribe(profile => this.profile = profile);
      this.gitService.gitRepos().subscribe(repos =>  this.repo = repos);
    }

  findProfile() {
    this.gitService.updateUser(this.username);
    this.gitService.gitProfile().subscribe(profile => {
      this.profile = profile;
    });

    this.gitService.gitRepos().subscribe(repos => {
      this.repo = repos;
    });
  }

  

}
