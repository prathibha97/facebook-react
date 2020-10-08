import React from "react";
import "../css/Widget.css";
function Widget() {
  return (
    <div className='widget'>
      <iframe
      title='9gag'
        src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F9gag&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1021527221619740'
        width='340'
        height='100%'
        style={{ border: "none", overflow: "hidden" }}
        scrolling='no'
        frameborder='0'
        allowTransparency='true'
        allow='encrypted-media'></iframe>
    </div>
  );
}

export default Widget;
