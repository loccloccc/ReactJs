import React from "react";
import CustomLink from "./CustomLink";
import HomePage from "./HomePage";
import NotFound from "./NotFound";

export default function Ex7() {
    // Lấy URL hiện tại
  const currentUrl = window.location.href;

  // So sánh URL
  const isHomePage = currentUrl === "http://localhost:5173/home-page";
  return (
    <div>
        <CustomLink></CustomLink>
      {/* Render theo điều kiện */}
      {isHomePage ? <HomePage></HomePage> : <NotFound></NotFound>}
    </div>
  );
}
