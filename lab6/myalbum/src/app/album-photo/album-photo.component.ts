import {Component, OnInit} from '@angular/core';
import {Album, Photo} from '../models';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {AlbumsService} from '../albums.service';

@Component({
  selector: 'app-album-photo',
  templateUrl: './album-photo.component.html',
  styleUrls: ['./album-photo.component.css']
})
export class AlbumPhotoComponent implements OnInit {
  album: Album;
  loaded: boolean;
  photos: Photo[];

  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumService: AlbumsService) {
    this.photos = [];
  }

  ngOnInit(): void {
    this.getAlbumPhotos();
  }

  getAlbumPhotos(): void {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      if (id != null) {
        this.albumService.getAlbumPhotos(id).subscribe((photo) => {
          this.photos = photo;
          this.loaded = true;
        });
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
