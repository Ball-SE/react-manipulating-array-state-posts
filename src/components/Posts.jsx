import { postData } from "../raw-data/post-data";
import { useState } from "react";

function Posts() {
  const [posts, setPosts] = useState(postData);

  const handleAddLike = (likeIndex) => {
    setPosts((like) =>
      like.map((post, index) =>
        index === likeIndex ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleAddDislike = (dislikeIndex) => {
    setPosts((dislike) =>
      dislike.map((post, index) =>
        index === dislikeIndex ? { ...post, likes: post.likes - 1 } : post
      )
    );
  };

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {posts.map((post, index) => (
          <div class="post-item" key={index}>
            <div class="post-header">
              <h2>{post.title}</h2>
              <div class="post-social-media-stats">
                <span class="stats-topic">Likes: </span>
                <span class="post-likes">{post.likes}</span>
              </div>
            </div>
            <p class="post-content">{post.content}</p>
            <div class="post-actions">
              <button class="like-button" onClick={() => handleAddLike(index)}>
                Like
              </button>
              <button
                class="dislike-button"
                onClick={() => handleAddDislike(index)}
              >
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
