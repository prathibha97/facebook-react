import React, { useEffect, useState } from "react";
import "../css/Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import db from "../firebase";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })),
        ),
      );
  }, []);

  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      {/* <Post
        profilePic='https://scontent.fcmb4-1.fna.fbcdn.net/v/t1.0-9/14681867_1159593897455719_3755886871151574095_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=LpDNkWSk2H0AX8NAjWy&_nc_ht=scontent.fcmb4-1.fna&oh=8bf9d4f17bf76706658b9b22d3b6b2f7&oe=5FA5631B'
        message='test post'
        timestamp='demo timestamp'
        username='Prathibha'
        image='https://scontent.fcmb4-1.fna.fbcdn.net/v/t1.0-9/17190390_1284898914925216_4438241606510305508_n.jpg?_nc_cat=101&_nc_sid=e3f864&_nc_ohc=W6ICCq0VzBsAX9ONDOT&_nc_ht=scontent.fcmb4-1.fna&oh=8c1b4ab28404fdcbad94792c892b6b1f&oe=5FA26C34'
      /> */}
      {posts.map((post) => (
        <Post
          key={post.data?.id}
          profilePic={post.data?.profilePic}
          message={post.data?.message}
          timestamp={post.data?.timestamp}
          username={post.data?.username}
          image={post.data?.image}
        />
      ))}
    </div>
  );
}

export default Feed;
