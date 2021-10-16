import React from "react";
import BlogDesktop from "./BlogDesktop";
const BlogCardProps = {
  Name: " UV Safty awareness: everything you should know to protect yourself",
  name: "What is a pcr test and why should you take one?",
  date: "jan, 9,11:45 am",
  link: " Read More",
  img: "https://image.shutterstock.com/image-vector/glade-forest-nature-landscape-3d-260nw-675639673.jpg",
};

export default function DesktopSlider() {
  return (
    <div>
      <BlogDesktop {...BlogCardProps} />
    </div>
  );
}
