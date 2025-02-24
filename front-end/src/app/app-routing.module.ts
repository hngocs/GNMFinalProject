import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './pages/websites/homepage/homepage.component';
import { IndexComponent } from './pages/partials/index/index.component';
const routes: Routes = [
    {path:'', component:IndexComponent,
      children: [
        {path:'', component:HomepageComponent}
      ] 
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
