import { User } from './user';
import { ProfileComponent } from './profile/profile.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent} from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRepoComponent } from './user-repo/user-repo.component';




const routes: Routes = [
  {path:"about", component:AboutComponent},
  {path:"home", component:HomeComponent},
  {path:'repo', component:UserRepoComponent},
  {path:'user', component:UserProfileComponent},
  {path:"profile",component:ProfileComponent},
  { path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
