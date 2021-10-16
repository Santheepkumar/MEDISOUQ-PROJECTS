import React from "react";
import "./BlogDesktop.scss";

export default function BlogDesktop({ Name, name, img, date, link }) {
  return (
    <div className='DesktopBlog'>
      <div className='DesktopBlog-Left Main'>
        <img className='DesktopBlog-Left-Img' src={img} alt='Snow' />
        <h1 className='DesktopBlog-Left-Name'>{Name}</h1>
        <div className='DesktopBlog-Left-Container'>
          <p className='DesktopBlog-Left-Container-date'>{date}</p>
          <a className='DesktopBlog-Left-Container-link' href='/'>
            {link}
          </a>
        </div>
      </div>
      <div className='DesktopBlog-Right Right1 '>
        <img className='DesktopBlog-Right-Img' src={img} alt='Snow' />
        <h1 className='DesktopBlog-Right-name'>{name}</h1>
        <div className='DesktopBlog-Right-Container'>
          <p className='DesktopBlog-Right-Container-date'>{date}</p>
          <a className='DesktopBlog-Right-Container-link' href='/'>
            {link}
          </a>
        </div>
      </div>
      <div className='DesktopBlog-Right Right2'>
        <img className='DesktopBlog-Right-Img' src={img} alt='Snow' />
        <h1 className='DesktopBlog-Right-name'>{name}</h1>
        <div className='DesktopBlog-Right-Container'>
          <p className='DesktopBlog-Right-Container-date'>{date}</p>
          <a className='DesktopBlog-Right-Container-link' href='/'>
            {link}
          </a>
        </div>
      </div>
      <div className='DesktopBlog-Right Right3'>
        <img className='DesktopBlog-Right-Img' src={img} alt='Snow' />
        <h1 className='DesktopBlog-Right-name'>{name}</h1>
        <div className='DesktopBlog-Right-Container'>
          <p className='DesktopBlog-Right-Container-date'>{date}</p>
          <a className='DesktopBlog-Right-Container-link' href='/'>
            {link}
          </a>
        </div>
      </div>
      <div className='DesktopBlog-Right Right4'>
        <img className='DesktopBlog-Right-Img' src={img} alt='Snow' />
        <h1 className='DesktopBlog-Right-name'>{name}</h1>
        <div className='DesktopBlog-Right-Container'>
          <p className='DesktopBlog-Right-Container-date'>{date}</p>
          <a className='DesktopBlog-Right-Container-link' href='/'>
            {link}
          </a>
        </div>
      </div>
    </div>
  );
}
