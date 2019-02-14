import { Component , EventEmitter , Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['post-create.component.css']
})
export class PostCreateComponent {
  // newPost = 'type Something !';
  enteredTitle = '';
  enteredContent = '';
  // postCreated = new EventEmitter();
  @Output() postCreated = new EventEmitter<Post>();
  // make default Post interface
  // onAddPost(postInput){
  //   // alert("You click me to post!");
  //   // this.newPost = 'The user\'s Post';
  //   console.log("postInput ----->>> ",postInput);
  //   console.dir(postInput);
  //   this.newPost = postInput.value;
  // }

  onAddPost(form: NgForm){
    if(form.invalid){
      return;
    }
    // this.newPost = this.enteredContent;
    const post: Post = {
      title : form.value.title,
      content : form.value.content
    };
    this.postCreated.emit(post);
  }
}
