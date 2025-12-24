import Image from "next/image";
import React from "react";

const MyImage = ({ src, alt, className, height, width }: MyImage) => {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        className={className}
        {...(height && width ? { height, width } : { fill: true })}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </>
  );
};

export default MyImage;
