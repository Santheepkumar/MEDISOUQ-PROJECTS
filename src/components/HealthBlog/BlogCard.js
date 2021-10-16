import React from "react";
import "./BlogCard.scss";

export default function BlogCard({ name, date, link, img }) {
  return (
    <div class='HealthBlog'>
      <div class='HealthBlog-Main'>
        <img class='HealthBlog-Main-Img' src={img} alt='' />
        <h1 class='HealthBlog-Main-Name'>{name}</h1>
        <div class='HealthBlog-Main-Bottom'>
          <p class='HealthBlog-Main-Bottom-Left'>{date} </p>
          <a class='HealthBlog-Main-Bottom-Right' href='/'>
            {link}
          </a>
        </div>
      </div>
    </div>
  );
}
