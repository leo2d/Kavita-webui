import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  baseUrl = environment.apiUrl;
  public placeholderImage = 'assets/images/image-placeholder-min.png';

  constructor() { }

  getVolumeCoverImage(volumeId: number) {
    return this.baseUrl + 'image/volume-cover?volumeId=' + volumeId;
  }

  getSeriesCoverImage(seriesId: number) {
    return this.baseUrl + 'image/series-cover?seriesId=' + seriesId;
  }

  getChapterCoverImage(chapterId: number) {
    return this.baseUrl + 'image/chapter-cover?chapterId=' + chapterId;
  }
}
