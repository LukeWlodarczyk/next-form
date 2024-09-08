"use client";

import { useState } from "react";

import { useWindowSize } from "usehooks-ts";

const FacebookVideoPlugin = () => {
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
        transition: ".6s",
        background: "none",
        border: "none",
        overflow: "hidden",
      }}
      src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1063315422078022&width=300&show_text=false&height=533&appId"
      width="300"
      height="533"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      onLoad={() => {
        console.log("laoded");
        setIsLoading(false);
      }}
    ></iframe>
  );
};

export default FacebookVideoPlugin;
