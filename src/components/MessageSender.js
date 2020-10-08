import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import React from "react";
import "../css/MessageSender.css";
function MessageSender() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar />
        <form>
          <input
            className='messageSender__input'
            type='text'
            placeholder="What's on your mind?"
          />
          <input type='text' placeholder='image URL (Optional)' />
          <button type='submit' onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <div className='messageSender__Bottom'>
        <div className='messageSender__option'>
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className='messageSender__option'>
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className='messageSender__option'>
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
