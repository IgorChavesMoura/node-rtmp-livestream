import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import videojs, { Player as VideoJsPlayer } from 'video.js';

import { LivestreamService } from '../../services/livestream.service';

@Component({
  selector: 'app-livestream-watch',
  templateUrl: './livestream-watch.component.html',
  styleUrls: ['./livestream-watch.component.scss']
})
export class LivestreamWatchComponent implements OnInit, OnDestroy {

  @ViewChild('target', {static: true})
  target:ElementRef;

  player:VideoJsPlayer;

  streamKey:string;



  constructor(private livestreamService:LivestreamService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      params => {

        this.streamKey = params.streamKey;

        const options = {

          autoplay: true,
          controls: true,
          responsive: true,
          sources: [
            { src: this.getLivestreamSrc(), type: 'application/x-mpegURL' }
          ]

        };

        this.player = videojs(this.target.nativeElement, options, () => {

          console.log('onPlayerReady', this);

        });

      }
    );

  }

  ngOnDestroy(): void {

    if (!!this.player) {
      this.player.dispose();
    }

  }

  getLivestreamSrc(){

    return this.livestreamService.getLivestreamSource(this.streamKey);

  }



}
