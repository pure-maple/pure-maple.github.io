var posts=["posts/4c63bf01/","posts/944687f6/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };