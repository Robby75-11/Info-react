import { Component } from "react";

const ImageComponent = ({ src, alt, className, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-xl shadow-md ${className}`}
      {...props}
    />
  );
};

export default ImageComponent;
