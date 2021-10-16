import React from "react";
import "./BlogCard.scss";

export default function BlogCard({ name, date, link, img }) {
  return (
    <div className='HealthBlogCard'>
      <div className='HealthBlogCard-Main'>
        <img className='HealthBlogCard-Main-Img' src={img} alt='' />
        <h1 className='HealthBlogCard-Main-Name'>{name}</h1>
        <div className='HealthBlogCard-Main-Bottom'>
          <p className='HealthBlogCard-Main-Bottom-Left'>{date} </p>
          <a className='HealthBlogCard-Main-Bottom-Right' href='/'>
            {link}
          </a>
        </div>
      </div>
    </div>
  );
}
