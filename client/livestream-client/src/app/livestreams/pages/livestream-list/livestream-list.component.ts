import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LivestreamService } from '../../services/livestream.service';

@Component({
  selector: 'app-livestream-list',
  templateUrl: './livestream-list.component.html',
  styleUrls: ['./livestream-list.component.scss']
})
export class LivestreamListComponent implements OnInit {

  livestreams = [];

  constructor(private livestreamService:LivestreamService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.livestreamService.getLivestreams()
      .then(
        livestreams => {

          this.livestreams = livestreams;

        }
      )

  }

  getLivestreamThumbnail(streamKey){

    return this.livestreamService.getLivestreamThumbnailUrl(streamKey);

  }

  goToLivestream(streamKey){

    this.router.navigate([`${streamKey}/watch`], { relativeTo:this.route });

  }

}
