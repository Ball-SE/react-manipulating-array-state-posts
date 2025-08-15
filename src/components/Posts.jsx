import { postData } from "../raw-data/post-data";
import { useState } from "react";

function PostItem({ title, content, likes: initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);

  function handleLike() {
    setLikes(likes + 1);
  }

  function handleDislike() {
    if (likes > 0) {
      setLikes(likes - 1);
    }
  }
  
  return (
    <div className="post-item">
      <div className="post-header">
        <h2>{title}</h2>
        <div className="post-social-media-stats">
          <span className="stats-topic">Likes: </span>
          <span className="post-likes">{likes}</span>
        </div>
      </div>
      <p className="post-content">{content}</p>
      <div className="post-actions">
        <button className="like-button" onClick={handleLike}>Like</button>
        <button className="dislike-button" onClick={handleDislike}>Dislike</button>
      </div>
    </div>
  );
}

function Posts() {
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {postData.map((item) => (
          <PostItem
            key={item.id}
            title={item.title}
            content={item.content}
            likes={item.likes}
          />
        ))}
      </div>
    </div>
  );
}

export default Posts;
