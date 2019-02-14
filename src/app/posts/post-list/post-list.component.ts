import { Component , Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector : 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['post-list.component.css']
})

export class PostListComponent {
  // posts = [
  //   { title: "First Post", content: "Thist is first post content"},
  //   { title: "Second Post", content: "Thist is Second post content"},
  //   { title: "Third Post", content: "Thist is Third post content"}
  // ];
  @Input() posts: Post[] = [];
}
