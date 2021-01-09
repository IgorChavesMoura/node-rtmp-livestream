import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LivestreamListComponent } from './pages/livestream-list/livestream-list.component';
import { LivestreamWatchComponent } from './pages/livestream-watch/livestream-watch.component';

const routes:Routes = [
  { path:'', component:LivestreamListComponent },
  { path:':streamKey/watch', component:LivestreamWatchComponent }
];

@NgModule({
  declarations: [LivestreamListComponent, LivestreamWatchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class LivestreamsModule { }
