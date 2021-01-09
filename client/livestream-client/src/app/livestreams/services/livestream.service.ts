import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivestreamService {

  private apiUrl = environment.API_URL;
  private thumbnailApiUrl = environment.THUMBNAIL_API_URL;

  constructor(private http:HttpClient) { }

  public getLivestreams(){

    const url = `${this.apiUrl}/api/streams`;

    return this.http.get(url).toPromise()
      .then(
        response => response.hasOwnProperty('live') ? Object.keys(response['live']) : []
      );

  }

  public getLivestreamThumbnailUrl(streamKey){

    return `${this.thumbnailApiUrl}/thumbnail/${streamKey}.png`;

  }

  public getLivestreamSource(streamKey){

    return `${this.apiUrl}/live/${streamKey}/index.m3u8`;

  }

}
