import {Component, OnInit} from '@angular/core';
import {Post} from '../models';
import {ActivatedRoute} from '@angular/router';
import {POSTS} from '../fake-posts-db';
import {Location} from '@angular/common';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  loading: boolean;

  constructor(private route: ActivatedRoute, private location: Location, private postService: PostsService) {
  }

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // this.post = POSTS.find((x) => x.id === +id);
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      this.getPost(id);
    });
  }

  goBack(): void {
    this.location.back();
  }

  getPost(id: number): void {
    this.loading = true;
    this.postService.getPost(id).subscribe((post) => {
      this.post = post;
      this.loading = false;
    });
  }

}
