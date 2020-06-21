import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoComponent} from './repo/repo.component'
import { UsersComponent } from './component/users/users.component';


const routes: Routes = [
  
  {path: '', component: UsersComponent },
  {path: 'repo', component: RepoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
