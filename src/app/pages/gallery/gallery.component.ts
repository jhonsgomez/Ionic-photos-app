import { Component } from '@angular/core';
import { PhotosService } from './../../services/photos.service'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent {

  photos: string[] = [];

  constructor(private photosServices: PhotosService) { 
    this.photos = this.photosServices.photos;
  }

  async takePhoto() {
    await this.photosServices.addNewPhoto();
  }
}
