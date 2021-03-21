import {Component, OnInit} from '@angular/core';
import {Album, Photo} from '../models';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {AlbumsService} from '../albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album;
  loaded: boolean;
  photos: Photo[];

  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumService: AlbumsService) {
    this.photos = [];
  }

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum(): void {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });
  }

  showPhotos(): void {
    this.albumService.getAlbumPhotos(this.album.id).subscribe((photos) => {
      this.photos = photos;
    });
  }


  updateAlbum(): void {
    this.loaded = false;
    this.albumService.updateAlbum(this.album).subscribe((album) => {
      console.log(album);
      this.loaded = true;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
