"use client";

import { useState } from "react";

import { useWindowSize } from "usehooks-ts";

const FacebookPagePlugin = () => {
  const [isLoading, setIsLoading] = useState(true);

  const size = useWindowSize();

  // useEffect(() => {
  //   if (window.FB) {
  //     // window.FB.XFBML.parse();
  //   }
  // }, []);

  return (
    <iframe
      style={{
        opacity: isLoading ? 0 : 1,
        transition: ".3s",
        background: "none",
        border: "none",
        overflow: "hidden",
      }}
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmuzykuj.katowice&tabs=timeline&width=300&height=550&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
      width="300"
      height="550"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      onLoad={() => {
        console.log("laoded");
        setIsLoading(false);
      }}
    ></iframe>
  );
};

export default FacebookPagePlugin;
