import {Component, OnInit} from '@angular/core';
import {Album} from '../models';
import {AlbumsService} from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  loaded: boolean;
  newAlbum: string;

  constructor(private albumsService: AlbumsService) {
    this.newAlbum = '';
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void {
    this.loaded = false;
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  addAlbum(): void {
    const album = {
      title: this.newAlbum
    };
    this.loaded = false;
    this.albumsService.addAlbum(album as Album).subscribe((albums) => {
      this.albums.push(albums);
      this.newAlbum = '';
      this.loaded = true;
    });
  }

  deleteAlbum(id: number): void {
    this.albums = this.albums.filter((x) => x.id !== id);
    this.albumsService.deleteAlbum(id).subscribe(() => {
      console.log('deleted', id);
    });
  }

}
