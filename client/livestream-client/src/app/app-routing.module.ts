import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivestreamsModule } from './livestreams/livestreams.module';

const routes: Routes = [
  { path:'livestreams', loadChildren: () => LivestreamsModule },
  { path:'**', redirectTo:'livestreams', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
