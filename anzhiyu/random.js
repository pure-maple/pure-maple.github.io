var posts=["posts/944687f6/","posts/b6d20742/","posts/d05e0771/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };