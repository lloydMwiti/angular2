import { Injectable } from '@angular/core';
import {  environment } from '../../environments/environment';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private url = "https://api.github.com/users";
  apiKey:string = environment.key;
  public username :String;

  constructor(private http:HttpClient) {
    this.username='lloydMwiti'
   }
  getData():Observable<any>{
    return this.http.get<any>(this.url);
  }
  gitProfile(){
    return this.http.get(this.url+ '/' + this.username + '?access_token=' + this.apiKey);
  }

  gitRepos() {
    return this.http.get(this.url+ '/' + this.username + '/repos' + '?access_token=' + this.apiKey);
  }
  gitinit(user:String){
    this.username=user;
  }
  updateUser(username: string) {
    this.username = username;
  }

}
// daneden?access_token=2e43fd822507b14f02075eca5666087aa44c2f69