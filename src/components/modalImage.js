import { useVideoDispatch, useVideoState } from "contexts/video/video.provider";
import React from "react";
import Lightbox from "react-awesome-lightbox";

function ModalImage({ alt = "Web Image" }) {
  const url = useVideoState("imgUrl");
  const urls = useVideoState("imgUrls");
  const startIndex = useVideoState("startIndex");
  const isOpen = useVideoState("isOpen");

  const dispatch = useVideoDispatch();
  const handleVideoClose = () => {
    dispatch({ type: "SET_CLOSE" });
  };
  if (!isOpen) return null;
  if (urls.length)
    return (
      <Lightbox
        images={urls}
        onClose={handleVideoClose}
        startIndex={startIndex}
      />
    );

  return <Lightbox image={url} onClose={handleVideoClose} title={alt} />;
}

export default ModalImage;
