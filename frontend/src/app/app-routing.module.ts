import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsPanelComponent } from './analytics-panel/analytics-panel.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'analytics', component: AnalyticsPanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
