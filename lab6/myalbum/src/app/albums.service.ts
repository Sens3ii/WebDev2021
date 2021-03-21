import {Injectable} from '@angular/core';
import {ALBUMS} from './db';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Album, Photo} from './models';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private client: HttpClient) {
  }

  getAlbums(): Observable<any> {
    return this.client.get<any>(`${this.BASE_URL}/albums`);
  }

  getAlbum(id: number): Observable<any> {
    return this.client.get<any>(`${this.BASE_URL}/albums/${id}`);
  }

  addAlbum(album: Album): Observable<any> {
    return this.client.post(`${this.BASE_URL}/albums`, album);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.client.put<Album>(`${this.BASE_URL}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.client.delete(`${this.BASE_URL}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<any> {
    return this.client.get(`${this.BASE_URL}/albums/${id}/photos`);
  }
}
