import {Injectable} from '@angular/core';
import {POSTS} from './fake-posts-db';
import {Post} from './models';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  BASE_URL = 'https://jsonplaceholder.typicode.com';
  options = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private client: HttpClient) {
  }

  // getPosts(): Observable<Post[]> {
  //   return of(POSTS);
  // }
  //
  // getPost(id: number): Observable<Post> {
  //   const post = POSTS.find((x) => x.id === id);
  //   return of(post);
  // }


  getPosts(): Observable<Post[]> {
    return this.client.get<Post[]>(`${this.BASE_URL}/posts`);
  }

  getPost(id: number): Observable<Post> {
    return this.client.get<Post>(`${this.BASE_URL}/posts/${id}`);
  }

  // addPost(post: Post): Observable<Post> {
  //   return this.client.post<Post>(`${this.BASE_URL}/posts`, post, this.options);
  // }
  //
  // updatePost(post: Post): Observable<Post> {
  //   return this.client.put<Post>(`${this.BASE_URL}/posts/${post.id}`, post, this.options);
  // }

  deletePost(id: number): Observable<any> {
    return this.client.delete<any>(`${this.BASE_URL}/posts/${id}`);
  }

}
