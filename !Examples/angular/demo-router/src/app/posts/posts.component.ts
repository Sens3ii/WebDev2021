import {Component, OnInit} from '@angular/core';
import {Post} from '../models';
import {POSTS} from '../fake-posts-db';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  loading: boolean;

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {

    this.getPosts();
  }

  getPosts(): void {
    this.loading = true;
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.loading = false;
    });
  }

  deletePost(id: number): void {
    this.posts = this.posts.filter((x) => x.id !== id);
    this.postsService.deletePost(id).subscribe();
  }

}
