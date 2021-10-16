import React from "react";
import "./BlogCard.scss";

export default function BlogCard({ name, date, link, img }) {
  return (
    <div class='HealthBlogCard'>
      <div class='HealthBlogCard-Main'>
        <img class='HealthBlogCard-Main-Img' src={img} alt='' />
        <h1 class='HealthBlogCard-Main-Name'>{name}</h1>
        <div class='HealthBlogCard-Main-Bottom'>
          <p class='HealthBlogCard-Main-Bottom-Left'>{date} </p>
          <a class='HealthBlogCard-Main-Bottom-Right' href='/'>
            {link}
          </a>
        </div>
      </div>
    </div>
  );
}
